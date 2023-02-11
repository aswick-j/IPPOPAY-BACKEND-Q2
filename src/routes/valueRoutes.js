import express from "express";
import {
  getAllValues,
  storeAllValues,
} from "../controllers/valueController.js";

const router = express.Router();

router.post("/store", storeAllValues);

router.get("/all", getAllValues);

export default router;
