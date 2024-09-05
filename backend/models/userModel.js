import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cartData:{
       type:Object,
       default:{} 
    }

},{minimize:false})    // cuzz if bina entry ke cartData create hojaye


const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
