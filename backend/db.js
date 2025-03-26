
import mongoose from "mongoose";
mongoose.connect("mongodb+srv://Admin:40461@cluster0.3dh9i.mongodb.net/concept_core");
const userSchema = new mongoose.Schema({
    email : {
        type : String,
        require :true
    },
    userName :{
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