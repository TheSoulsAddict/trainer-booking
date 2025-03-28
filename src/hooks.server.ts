import { json, redirect } from '@sveltejs/kit';
import { TOKEN } from '$env/static/private';

export async function handle({ event, resolve }) {
	// console.log('Incoming request:', event.url.pathname);

	// Log cookies for debugging
	// console.log('Cookies received:', event.cookies.getAll());

	if (event.url.pathname.startsWith('/admin')) {
		const isAuthenticated = event.cookies.get('admin_auth_obscure');

		if (isAuthenticated !== TOKEN) {
			// console.log('Unauthorized access detected! Redirecting to login.');
			// return json({ error: 'Unauthorized' }, { status: 401 });
			redirect(302, '/login');
		}
	}

	return await resolve(event);
}
