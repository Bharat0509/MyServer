import express from "express";
import cors from "cors";
import connectToDB from "./utils/connectToDB.js";

import notesRouter from "./routes/notesRoutes.js";

const PORT = 5000;
const URI =
    "mongodb+srv://bharat:bharat@cluster0.mfnma.mongodb.net/NOtes?retryWrites=true&w=majority";

const app = express();

app.use(express.json({}));
app.use(cors());

app.use("/api/v1/notes", notesRouter);

app.listen(PORT, () => {
    connectToDB(URI);
    console.log("Server is Listening http://localhost:5000");
});
