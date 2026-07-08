import pool from "../config/db.js";

export const createUsersTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)
    `;
  try {
    await pool.query(queryText);
    console.log("users table created.");
  } catch (error) {
    console.log("Error while creating users table: ", error);
  }
};
