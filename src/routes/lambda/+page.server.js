import { Amplify } from "aws-amplify"
import { generateClient } from "aws-amplify/api"
import outputs from "$lib/amplify_outputs.json"

Amplify.configure(outputs)

export async function load() {
    const client = generateClient()
    const response = await client.queries.sayHello({
        name: "Amplify",
    })
    let parsedResponse = JSON.parse(response.data)
    parsedResponse.body = JSON.parse(parsedResponse.body)
    return {
        parsedResponse
    }
}