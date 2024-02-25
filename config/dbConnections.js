const mongoose = require('mongoose');
const connectDb=async()=>{
    try {
        const connect=await mongoose.connect(process.env.CONNECTION)
        console.log("database Connecion: ",connect.connection.host,connect.connection.name);
    } catch (error) {
        console.log();
        process.exit(1)
    }
}
module.exports=connectDb