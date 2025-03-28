CREATE TABLE "booking" (
	"id" serial PRIMARY KEY NOT NULL,
	"termId" integer,
	"tel" varchar(20),
	"email" varchar(50),
	"name" varchar(50)
);
