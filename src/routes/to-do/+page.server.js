import * as db from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';


/**
 * @param {{ cookies: { get: (arg0: string) => any; set: (arg0: string, arg1: string, arg2: { path: string; }) => void; }; }} param0
 */
export function load({ cookies }) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		todos: db.getTodos(id)
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		try {
			const data = await request.formData();
			const userid = cookies.get('userid') || crypto.randomUUID();
			cookies.set('userid', userid, { path: '/' });

			const description = data.get('description');
			if (!description) throw new Error("Description is missing");

			db.createTodo(userid, description);

			// Redirect to avoid reprocessing the form on reload
			throw redirect(303, '/'); 
		} catch (error) {
			console.error('Error creating todo:', error);
			return { error: true, message: error.message };
		}
	}
};