import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandling.js";
import { createUsersTable } from "./data/createUserTable.js";
import { buildHomeHtml } from "./utils/buildHomeHtml.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api/users", userRoutes);

//Error handling middleware
app.use(errorHandler);
createUsersTable();

//BASE URL
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  const databaseName = result.rows[0].current_database;

  const html = buildHomeHtml(databaseName);
  res.send(html);
});

// Start Server only if not in production (Vercel Serverless environment)
if (process.env.NODE_ENV !== "production") {
  app.listen(process.env.PORT || 5000, async () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
  });
}

export default app;
