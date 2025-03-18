
import express from "express";
const  userRouter = express.Router();
import zod from "zod"
import {users} from "../db.js";
import jwt from "jsonwebtoken"
import JWT_SECRET  from "./config.js";
import authMiddleware from "../middleware.js";

const signupSchema = zod.object({
    email : zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()
})
userRouter.post("/signup",async(req,res)=>{

    const succ = signupSchema.safeParse(req.body);
    if(!succ){
        return res.json({
            message : "Inputs are Invalid"
        })
    }
    const user = await users.findOne({
        email : req.body.email
    })
    if(user){
        return res.json({
            message : "User already Exist"
        })
    }

    const dbUser = await users.create({
        email : req.body.email,
        firstName : req.body.firstName,
        lastName: req.body.lastName,
        password : req.body.password,
    })

    const userId = dbUser._id;
    const token = jwt.sign({
        userId : dbUser._id
    },JWT_SECRET,{expiresIn:60*60*24});
    res.json({
        msg:"User Created SuccessFully",
        token:token
    })
})
const signinSchema = zod.object({
    email : zod.string().email(),
    password:zod.string()
})
userRouter.post("/signin", async(req,res)=>{

    const succ = signinSchema.safeParse(req.body);
    if(!succ){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const user = await users.findOne({
        email : req.body.email,
        password:req.body.password
    })

    if(user){
        const token = jwt.sign({
            userId : user._id
        },JWT_SECRET)
        return res.json({
            token:token
        })
    }
    res.status(411).json({
        msg:"Error while logging in"
    })
})

const updateSchema = zod.object({
    firstName :zod.string().optional(),
    lastName : zod.string().optional(),
    password : zod.string().optional()
})
userRouter.put("/updateDetails", authMiddleware,async(req,res)=>{
    const succ = updateSchema.safeParse(req.body)
    if(!succ){
        res.json({
            msg:"Error while updating"
        })
    }
    await users.updateOne(
        {email : req.body.email},
        {$set : req.body}
    )
    return res.json({
        msg:"Details Updated Successfully!!"
    })
})

export default userRouter;
