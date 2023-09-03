import Subject from "../models/subject.model.js";

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
