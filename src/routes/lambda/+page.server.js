import { fetchLambdaQuery } from "$lib/amplify-utils";


export async function load() {
    // Return the Promise directly from fetchQuery
    return {
        sayHi: fetchLambdaQuery("sayHi", { name: "Amplify" })
    };
}