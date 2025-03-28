import { json } from '@sveltejs/kit';
import { ADMIN_PASSWORD, TOKEN } from '$env/static/private'; // Store your password in `.env`

export async function POST({ request, cookies }) {
	const { password } = await request.json();

	if (password !== ADMIN_PASSWORD) {
		return json({ error: 'Invalid password' }, { status: 401 });
	}

	cookies.set('admin_auth_obscure', TOKEN, {
		httpOnly: true, // Prevents JavaScript access
		secure: process.env.NODE_ENV === 'production', // Secure in production
		sameSite: 'lax',
		path: '/', // Available for all routes
		maxAge: 3600 * 12 // 1 hour expiration
	});

	return json({ success: true });
}
