import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Detect whether a real Postgres database has been configured.
export const hasDatabase = Boolean(process.env.DATABASE_URL);

// When DATABASE_URL is provided, create a real pool and drizzle client.
// Otherwise export nulls so the app can fall back to an in-memory storage in dev.
export let pool: any = null;
export let db: any = null;

if (hasDatabase) {
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzle(pool, { schema });
}
