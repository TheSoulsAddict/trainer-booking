import { pgTable, serial, varchar, integer } from 'drizzle-orm/pg-core';

export const term = pgTable('term', {
	id: serial('id').primaryKey(),
	date: varchar('date', { length: 12 }).notNull(),
	timeStart: varchar('timeStart', { length: 8 }).notNull(),
	timeEnd: varchar('timeEnd', { length: 8 }).notNull(),
	location: varchar('location', { length: 100 }).notNull(),
	type: varchar('type', { length: 100 }).notNull()
});

export const booking = pgTable('booking', {
	id: serial('id').primaryKey(),
	termId: integer('termId').notNull(),
	tel: varchar('tel', { length: 20 }).notNull(),
	email: varchar('email', { length: 50 }).notNull(),
	name: varchar('name', { length: 50 }).notNull(),
	message: varchar('name', { length: 500 }).notNull()
});
