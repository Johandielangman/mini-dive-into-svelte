
/**
 * @param {{ cookies: { get: (arg0: string) => string | undefined; set: (arg0: string, arg1: string, arg2: { path: string; }) => void; }; }} param0
 */
export function load({ cookies }) {
	const visited = cookies.get('visited');

    cookies.set('visited', 'true', { path: "/"});

	return {
		visited: visited === 'true'
	};
}

export const prerender = true;