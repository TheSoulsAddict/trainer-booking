export interface Term {
	id: number;
	date: string;
	timeStart: string;
	timeEnd: string;
	location: string;
	type: string;
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
