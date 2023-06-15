import express, { Router } from "express";
import { getAllCats } from "../services/cat.service";

export const catRouter: Router = express.Router();
catRouter.get("/", getAllCats);
