import express from 'express'
import { dbConnect } from './lib/dbConnect.js'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserAuthRouter from './routes/UserAuthRouter.js'
import cookieParser from "cookie-parser"
const app = express()
dotenv.config()

const PORT = process.env.PORT || 4030

//cors wit cookie true and origin
app.use(express.json())
app.use(cookieParser());
app.use(cors({origin: "http://localhost:5173", credentials: true}))

dbConnect()


app.use("/user", UserAuthRouter)

// app.get("/", (req,res)=>{
//     return res.status(200).send("HEllo Mellow")
// })

app.listen(PORT, ()=>{
    console.log(`server listeninig on ${PORT}`)
})