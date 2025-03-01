import { generateClient } from "aws-amplify/api";
import { Amplify } from "aws-amplify";
import outputs from "$lib/amplify_outputs.json";

Amplify.configure(outputs);

const client = generateClient();

/**
 * Fetches a Lambda query.
 * @param {string} queryName - The name of the query to execute.
 * @param {object} args - The arguments to pass to the query.
 * @returns {Promise<{data: any, error: string | null}>} The result of the query.
 */
export async function fetchLambdaQuery(queryName, args) {
    try {
        const response = await client.queries[queryName](args);
        return { data: JSON.parse(response.data), error: null };
    } catch (error) {
        return { data: null, error: error.message };
    }
}