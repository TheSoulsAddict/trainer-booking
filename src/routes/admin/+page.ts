import type { Term } from '$lib/types.js';

export const load = async ({ fetch, params }) => {
	const res = await fetch('/api/admin/load-terms');
	if (!res.ok) {
		console.log('Error fetching terms.');
	}
	const terms: Term[] = await res.json();
	return {
		terms: terms
	};
};
