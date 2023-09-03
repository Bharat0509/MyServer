import Note from "../models/note.model.js";

export const createNote = async (req, res) => {
    await Note.create(req.body);
    return res.status(200).json("OK");
};

export const allNotes = async (req, res) => {
    const notes = await Note.find();
    return res.status(200).json({
        success: true,
        notes: notes,
    });
};
