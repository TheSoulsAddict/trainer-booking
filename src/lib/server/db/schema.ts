import { pgTable, serial, varchar, integer } from 'drizzle-orm/pg-core';

export const term = pgTable('term', {
	id: serial('id').primaryKey(),
	dotw: varchar('dotw', { length: 2 }),
	date: varchar('date', { length: 12 }),
	timeStart: varchar('timeStart', { length: 8 }),
	timeEnd: varchar('timeEnd', { length: 8 }),
	location: varchar('location', { length: 100 }),
	type: varchar('type', { length: 100 })
});

export const booking = pgTable('booking', {
	id: serial('id').primaryKey(),
	termId: integer('termId'),
	tel: varchar('tel', { length: 20 }),
	email: varchar('email', { length: 50 }),
	name: varchar('name', { length: 50 })
});
