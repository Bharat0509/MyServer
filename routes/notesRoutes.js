import express from "express";
import { allNotes, createNote } from "../controller/createNote.controller.js";

const router = express.Router();

router.post("/", createNote);

router.get("/", allNotes);

export default router;
