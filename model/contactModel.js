const mongoose = require('mongoose');

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"name"]
    },
    email:{
        type:String,
        required:[true,"email"]
    },
    phone:{
        type:String,
        required:[true,"phone"]
    }
},{
    timestamps:true,
})
module.exports=mongoose.model("Contacts",contactSchema)