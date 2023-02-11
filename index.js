import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { connectDB } from "./src/db-init/dbConn.js";
import logger from "./src/utils/Logger.js";
import valueRoutes from "./src/routes/valueRoutes.js";

import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json());

app.use(cors());

connectDB();

const PORT = process.env.PORT || 8000;

mongoose.connection.once("open", () => {
  logger.info("MongoDB Connected Successfully");
  app.listen(PORT, () => logger.info(`Server is listening on Port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  logger.info("DB Connection Failed");
});

// app.all("*", (req, res) => {
//   res.send("Route not found");
// });

app.use("/api", valueRoutes);
