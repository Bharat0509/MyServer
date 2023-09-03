import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        frontImage: {
            type: String,
            required: true,
        },
        chapter: {
            type: Number,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        course_year: {
            type: String,
            required: true,
        },
        degree: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Note = mongoose.model("Note", NoteSchema);
export default Note;
