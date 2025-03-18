
import mongoose from "mongoose";
mongoose.connect("mongodb+srv://mohdareef4400:Areef4400@cluster0.2zpt8.mongodb.net/concept_core");
const userSchema = new mongoose.Schema({
    email : {
        type : String,
        require :true
    },
    firstName :{
        type : String,
        require :true
    },
    lastName : {
        type : String,
        require :true
    },
    password :{
        type : String,
        require :true
    }
})
const users = new mongoose.model("users",userSchema);
export {users} ;
