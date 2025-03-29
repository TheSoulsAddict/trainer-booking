import { json, type Cookies } from '@sveltejs/kit';
import { TOKEN } from '$env/static/private';
import { db } from '$lib/server/db/index.js';
import { booking, term } from '$lib/server/db/schema.js';
import type { Term, Booking } from '$lib/types.js';
import { eq } from 'drizzle-orm';

export const GET = async ({ cookies, params }) => {
	const { task } = params;
	switch (task) {
		case 'load-terms':
			return await loadTerms();
		// invalid task
		default:
			return json({ message: 'Invalid task' }, { status: 400 });
	}
};

export const POST = async ({ request, cookies, params }) => {
	const data = await request.json();
	const { task } = params;
	switch (task) {
		case 'add-term':
			return await addTerm(data, cookies);
		case 'delete-term':
			return await deleteTerm(data.id, cookies);
		case 'add-booking':
			return await addBooking(data);
		// invalid task
		default:
			return json({ message: 'Invalid task' }, { status: 400 });
	}
};

// tasks
async function loadTerms() {
	try {
		const result = await db.select().from(term).orderBy(term.date, term.timeStart);
		return json(result); // Return the result as JSON
	} catch (err) {
		return json({ message: 'Error fetching data' }, { status: 500 });
	}
}

async function addTerm(data: Term, cookies: Cookies) {
	// authentication
	const isAuthenticated = cookies.get('admin_auth_obscure');
	if (isAuthenticated !== TOKEN) {
		return json({ authenticated: false }, { status: 401 });
	}
	// If the token is valid, proceed to fetch sensitive data from the database
	try {
		const result = await db.insert(term).values(data);
		return json(result);
	} catch (err) {
		return json({ message: 'Error adding data' }, { status: 500 });
	}
}

async function deleteTerm(id: number, cookies: Cookies) {
	// authentication
	const isAuthenticated = cookies.get('admin_auth_obscure');
	if (isAuthenticated !== TOKEN) {
		return json({ authenticated: false }, { status: 401 });
	}
	// If the token is valid, proceed to fetch sensitive data from the database
	try {
		const result = await db.delete(term).where(eq(term.id, id));
		return json(result);
	} catch (err) {
		return json({ message: 'Error deleting data' }, { status: 500 });
	}
}

async function addBooking(data: Booking) {
	try {
		const result = await db.insert(booking).values(data);
		return json(result);
	} catch (err) {
		return json({ message: 'Error adding data' }, { status: 500 });
	}
}
