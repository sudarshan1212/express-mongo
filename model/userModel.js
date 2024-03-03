const mongoose = require('mongoose');
const Userschema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"enter ur username"]
    },
    email:{
        type:String,
        required:[true,"enter ur email"]
    },
    password:{
        type:String,
        required:[true,"enter ur password"]
    }
},{
    timestamps:true,
})
module.exports=mongoose.model("users",Userschema)