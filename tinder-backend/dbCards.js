//Outline the structure of the tinder cards in our mongodb databse (json structure)
import mongoose from "mongoose";

const cardSchema = mongoose.Schema ({
    name: String,
    imgUrl: String
});

export default mongoose.model("cards", cardSchema);
