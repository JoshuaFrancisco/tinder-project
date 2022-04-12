import express from "express";
//import res from "express/lib/response";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from 'cors';

// App Config
// An instance of express
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:12qwASZX@cluster0.vvm21.mongodb.net/tinderdb?retryWrites=true&w=majority' //database connection string

    
// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
/* Deprecated
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}) */


// API Endpoints
app.get("/", (req, res) => res.status(200).send("HELLO CLEVER PROGRAMMERS!!!"));


//create record
app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;

    //using cardSchema in dbCards.js to create json file 
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err); //error
        } else {
            res.status(201).send(data); //success
        }
    });
});

//get record
app.get("/tinder/cards", (req, res) => {
    //using cardSchema in dbCards.js to create json file 
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err); //error
        } else {
            res.status(200).send(data); //success
        }
    });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));