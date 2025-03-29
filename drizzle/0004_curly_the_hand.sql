ALTER TABLE "booking" ALTER COLUMN "name" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "booking" ADD COLUMN "message" varchar(500) NOT NULL;