import mongoose from 'mongoose'

const subjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    frontImage: {
      type: String,
      required: true
    },
    number_of_chapters: {
      type: Number,
      required: true
    },
    degree: {
      type: String,
      required: true
    },
    notes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
      }
    ]
  },
  {
    timestamps: true
  }
)

const Subject = mongoose.model('Subject', subjectSchema)
export default Subject
