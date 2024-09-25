import { pgTable, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  userId: text("userId").notNull(),
  plaidID: text("plaidId"),
});

export const insertAccountSchema = createInsertSchema(accounts);
