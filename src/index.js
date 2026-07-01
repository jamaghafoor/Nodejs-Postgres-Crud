import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./config/db.js";
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes

//Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

//BASE URL
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.json({
    message: "API is running",
    database: result.rows[0].current_database,
  });
});

// Start Server
app.listen(process.env.PORT || 5000, async () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
