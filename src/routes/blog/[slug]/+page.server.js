import { error } from '@sveltejs/kit';
import { posts } from '$lib/data.js';

/**
 * @param {{ params: { slug: string } }} context
 */
export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) error(404);

	return {
		post
	};
}
