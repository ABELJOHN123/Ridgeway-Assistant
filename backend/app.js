import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import investigationRoutes from "./routes/investigationRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/investigation", investigationRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});