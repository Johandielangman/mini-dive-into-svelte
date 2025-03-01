import { fetchLambdaQuery } from "$lib/amplify-utils";

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
        try {
			const response = await fetchLambdaQuery("sayHi", { name: data.get('description') })
            return {
                success: response.data.hello
            }
		} catch (error) {
			return fail(422, {
				error: error.message
			});
		} 
	}
};