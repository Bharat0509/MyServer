import express from "express";
import {
    allSubjects,
    createSubject,
    getSubject,
} from "../controller/subjects.controller.js";
const router = express.Router();

router.post("/", createSubject);

router.get("/", allSubjects);
router.get("/:id", getSubject);

export default router;
