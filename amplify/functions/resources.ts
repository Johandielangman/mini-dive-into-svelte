import { execSync } from "node:child_process";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { defineFunction } from "@aws-amplify/backend";
import { DockerImage, Duration } from "aws-cdk-lib";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";

const functionDir = path.dirname(fileURLToPath(import.meta.url));

export const sayHello = defineFunction((scope) => {
  const functionName = "say-hello"; // Scoped within defineFunction

  return new Function(scope, functionName, {
    handler: "index.handler",
    runtime: Runtime.PYTHON_3_11,
    timeout: Duration.seconds(20),
    code: Code.fromAsset(functionDir, {
      bundling: {
        image: DockerImage.fromRegistry("public.ecr.aws/lambda/python:3.11"),
        local: {
          tryBundle(outputDir: string) {
            execSync(
              `python -m pip install -r ${path.join(
                functionDir,
                functionName,
                "requirements.txt"
              )} -t ${outputDir} --platform manylinux2014_x86_64 --only-binary=:all:`
            );
            execSync(`cp -r ${path.join(functionDir, functionName)}/* ${outputDir}`);
            return true;
          },
        },
      },
    }),
  });
}, {
  resourceGroupName: "auth",
});
