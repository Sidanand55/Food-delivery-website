import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"




// App config
const app= express()
const port= 4000

// middleware 
app.use(express.json())
app.use(cors({
    origin: "*"
}))

// db connection
connectDB();

// Api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order", orderRouter)



app.get("/", (req, res)=>{
    res.send("API working")
})

app.listen(port, ()=>{
    console.log(`Server started on port on http://localhost:${port}`);
})

// mongodb+srv://sidanand:sidanand55@cluster0.3a3z2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0