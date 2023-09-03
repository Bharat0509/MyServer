import Subject from "../models/subject.model.js";
import Note from "../models/note.model.js";
export const createSubject = async (req, res) => {
    await Subject.create(req.body);
    return res.status(200).json("OK");
};

export const allSubjects = async (req, res) => {
    const subjects = await Subject.find();
    return res.status(200).json({
        success: true,
        data: subjects,
    });
};
export const getSubject = async (req, res) => {
    const subjectInfo = await Subject.findById(req.params.id).populate({
        path: "notes",
        model: Note,
    });
    return res.status(200).json({
        success: true,
        data: subjectInfo,
    });
};
