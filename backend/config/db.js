import mongoose, { mongo } from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://sidanand:sidanand55@cluster0.3a3z2.mongodb.net/food-del').then(()=>{
        console.log("Database connected!");
        
    })
}
