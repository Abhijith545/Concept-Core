


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Admin:40461@cluster0.3dh9i.mongodb.net/ConceptCore")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Failed to connect to MongoDB"));

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const UserModel = mongoose.model("User", UserSchema);

app.post("/api/signup", async (req, res) => {
    const {username, email, password} = req.body;
    try {
        const existingUser = await UserModel.findOne({username});
        if (existingUser) {
            return res.status(400).json({message: "User already exists"});
        }
        const newUser = new UserModel({username, email, password});
        await newUser.save();
        return res.json({ success: true, userId: newUser._id });
    }
    catch (err) {
        console.log("Error during signup: ", err);
        return res.status(500).json({message: "Internal Server Error"});
    }
});

app.post("/api/login", async (req, res) => {
    const {username, password} = req.body;
    try {
        const existingUser = await UserModel.findOne({username});
        if (!existingUser) {
            return res.status(400).json({message: "User does not exist"});
        }
        if (existingUser.password !== password) {
            return res.status(400).json({message: "Invalid password"});
        }
        return res.json({ success: true, userId: existingUser._id });
    }
    catch (err) {
        console.log("Error during login: ", err);
        return res.status(500).json({message: "Internal Server Error"});
    }
});

app.listen(3000);
