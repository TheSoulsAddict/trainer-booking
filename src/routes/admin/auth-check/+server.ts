import { json } from '@sveltejs/kit';
import { TOKEN } from '$env/static/private';

export async function GET({ cookies }) {
	const isAuthenticated = cookies.get('admin_auth_obscure');

	if (isAuthenticated !== TOKEN) {
		return json({ authenticated: false }, { status: 401 });
	}

	return json({ authenticated: true });
}
