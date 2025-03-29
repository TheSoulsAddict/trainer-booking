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
	termId: number;
	tel: string;
	email: string;
	name: string;
	message: string;
}

export interface BookingDict {
	[id: number]: Booking;
}
