export interface Term {
	id: number;
	dotw: string | null;
	date: string | null;
	timeStart: string | null;
	timeEnd: string | null;
	location: string | null;
	type: string | null;
}

export interface TermDict {
	[id: number]: Term;
}

export interface Booking {
	term_id: number;
	name: string;
	lastname: string;
	email: string;
}

export interface BookingDict {
	[id: number]: Booking;
}
