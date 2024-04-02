 import mongoose from "mongoose";
 import dotenv from 'dotenv'

 dotenv.config()
 const uri = process.env.MONGO_URI;
 const port = process.env.PORT;
 const dbName = process.env.DBNAME;

export const dbConnect = async (req, res) => {
    try {
       //await mongoose.connect('mongodb://127.0.0.1:27017/mongo-auth-db')
        await mongoose.connect(uri,port/dbName)
        console.log("db connected")
    } catch (error) {
        console.log("failed to connect")
        
    }
}
