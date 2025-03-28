CREATE TABLE "term" (
	"id" serial PRIMARY KEY NOT NULL,
	"dotw" varchar(2),
	"date" varchar(12),
	"timeStart" varchar(8),
	"timeEnd" varchar(8),
	"location" varchar(100),
	"type" varchar(100)
);
