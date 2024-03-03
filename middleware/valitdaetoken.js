const AsyncHandler = require("express-async-handler");
const jwt= require("jsonwebtoken");

const validateTOken=AsyncHandler(async(req,res,next)=>{
    let token;
    const auth=req.headers.Authorization ||req.headers.authorization;
   if(auth && auth.startsWith("Bearer")){
    token=auth.split(" ")[1]
    // console.log(token);
    jwt.verify(token,process.env.ACCESS_TOKEN_SERVER,(err,decoded)=>{
        if(err){
            res.status(400)
            throw new Error("not decoded")
        }
        // console.log(decoded.user);
        req.user=decoded.user
        next()
    })
    if(!token){
        res.status(401)
        throw new Error("user is not authorized or token is missing")
      }
   }
})

module.exports=validateTOken