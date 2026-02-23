import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


async function register (req, res){
    const{ name, email, password} = req.body;

    const isUserExist =await  User.findOne({email});

    if(isUserExist){
        return res.status(409).json({message:"Email already in use"})
    }

    const user = await user.create({
        name,
        email,
        password,
    })

    const token = jwt.sign({
        id:user._id,
        email:user.email,
    },process.env.JWT_SECRET)

    res.cookie('token', token);

    res.status(201).json({
        message:"User created Sucessfully",
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
            password:user.password
        }
    })
}


module.exports = {register}