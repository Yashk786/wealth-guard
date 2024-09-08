import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({path: '.env.local'});

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  dbCredentials: {
    url: process.env.DB_URL!,
  },
  verbose: true,
  strict: true,
});