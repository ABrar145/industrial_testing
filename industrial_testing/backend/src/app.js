import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import exampleRoutes from "./routes/example.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
app.use("/api/example", exampleRoutes);
app.use("/api/", uploadRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Backend API is running" });
});

export default app;
