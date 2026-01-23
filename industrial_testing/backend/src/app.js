import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import exampleRoutes from "./routes/example.routes.js";
app.use("/api/example", exampleRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Backend API is running" });
});

export default app;
