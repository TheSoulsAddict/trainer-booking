import { redirect } from '@sveltejs/kit';

export async function load({ fetch }) {
	const res = await fetch('/admin/auth-check'); // Forces a server check

	if (!res.ok) {
		throw redirect(302, '/login'); // Redirect if unauthorized
	}

	return {};
}
