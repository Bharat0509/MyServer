import mongoose from "mongoose";
const connectToDB = async (uri) => {
    mongoose.set("strictQuery", true);
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    mongoose
        .connect(uri, options)
        .then(() => console.log("Successfully Connected to DB"))
        .catch((err) => {
            console.log("ERR", err);
        });
};
export default connectToDB;
