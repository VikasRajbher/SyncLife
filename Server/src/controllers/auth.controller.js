const userModel = require("../model/user.model");
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');
const bcrypt = require('bcrypt');


async function Register(req, res){

    const {name, email, password} = req.body;

    const isUserAlreadyExist = await userModel.findOne({email});

    if(isUserAlreadyExist){
        return res.status(409).json({
            message:"Already exist"
        })
    }

    const hash = await bcrypt.hash(password,10)

    const User = await userModel.create({
        name,
        email,
        password: hash,
    })


    const token  = jwt.sign({
        id:User._id,
    },process.env.JWT_SECRET)

    res.cookie('token',token)

    res.status(201).json({
        message:"User Registered",
        user:{
            id:User._id,
            email:User.email,
        }
    })
}

async function Login(req, res){

    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if(!user){
        res.status(409).json({message:"Invalid Credentials"})
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if(!passwordValid){
        res.status(409).json({message:"Invalid Credentials"})
    }

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET);

    res.cookie('token', token);


    res.status(201).json({
        message:"Logged in",
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        }
    })
}


module.exports = {Register, Login}