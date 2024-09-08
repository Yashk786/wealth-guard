import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema/*",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://wealth-guard_owner:3RTLG9nXstaK@ep-cold-haze-a5cx8i3h.us-east-2.aws.neon.tech/wealth-guard?sslmode=require',
  }
});