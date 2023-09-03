import express from "express";
import {
    allSubjects,
    createSubject,
} from "../controller/subjects.controller.js";
const router = express.Router();

router.post("/", createSubject);

router.get("/", allSubjects);

export default router;
