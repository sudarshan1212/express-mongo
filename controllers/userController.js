const asyncHandler=require("express-async-handler")
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")
const Users=require('../model/userModel')
//register;
const register=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body
    if(!username|| !email|| !password){
        res.status(400)
        throw new Error("all fields are Mandatory")
    }
    //email finding    
    const emailFind=await Users.findOne({email})
    if(emailFind){
        res.status(400)
        throw new Error("email is already used")
    }
    //password
   const userPassword=await bcrypt.hash(password,10)
   console.log("password",userPassword);
   const user=await Users.create({
   username,email,password:userPassword
   })
//    console.log(user);
   if(user){
    // res.json(user)
    res.status(201).json({_id:user.id,email:user.email})
   }else{
    res.status(400)
    throw new Error("register is not completed")
   }
})
//login
const login=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    if(!email ||!password){
        res.status(400)
        throw new Error("all field are mandotory")
    }
    const user=await Users.findOne({email})
    if(user && (await bcrypt.compare(password,user.password))){
       const accessToken=jwt.sign({
     user: {  userName:user.username,
        email:user.email,
        id:user.id}
       },
        process.env.ACCESS_TOKEN_SERVER,
        {expiresIn:"15m"}
       )
       res.status(200).json({accessToken})
    }else{
        res.status(400)
         throw new Error("email or password is not valid ")
    }
    res.json({message:"this is login"})
})
//current
const current=(req,res)=>{
    res.json(req.user)
}
module.exports={register,current,login}