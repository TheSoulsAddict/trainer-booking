import type { Booking, Term } from '$lib/types.js';

export const load = async ({ fetch, params }) => {
	const res_terms = await fetch('/api/load-terms');
	if (!res_terms.ok) {
		console.log('Error fetching terms.');
	}
	const terms: Term[] = await res_terms.json();

	const res_bookings = await fetch('/api/load-bookings');
	if (!res_bookings.ok) {
		console.log('Error fetching bookings.');
	}
	const bookings: Booking[] = await res_bookings.json();

	return {
		terms: terms,
		bookings: bookings
	};
};
