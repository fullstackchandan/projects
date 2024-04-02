import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const signup = async (req,res) =>{

    // get req and destruvture 
    const {username, email, password} = req.body;
    //try catch - check if admin exist or not
    try {
        
        const existingUser = await User.findOne({email: email})
        if(existingUser){
            return res.status(200).send({msg: "user already exists"})
        }
        //hashed password
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await User.create({
            username: username, 
            email: email, 
            password: hashedPassword
        })
        return res.status(201).send({msg: "new user registred"})
    } catch (error) {
        return res.status(500).send({msg: "error while signup", error: error})
    }    
}

export const login = async (req,res) =>{
    
    // check if user exist - allow else out
    const {email, password} = req.body;
    try {
        const existingUser = await User.findOne({email: email})
        if(!existingUser){
            return res.status(200).send({msg: "user not found"})
        }
        //compare hashed password
        const matchedPassword = bcrypt.compare(password, existingUser.password)
        if(!matchedPassword){
            return res.status(200).send({msg: "wrong password"})
        }
        //jwt sign- payload, secret, option
        const JwtToken = jwt.sign(
            {
                _id: existingUser._id, 
                email: existingUser.email
            }, 
            process.env.JWT_KEY
        )
            
        //cookie- cookie-name, jwtToken, options- path, expiresIn, httpOnly, sameSite
        res.cookie("token", JwtToken, {
            path: "/",
            expiresIn: new Date(Date.now()+ 1000*60*60*24),
            httpOnly: true,
            sameSite: 'lax',
        })

        res.status(200).send({existingUser, JwtToken})            
    } catch (error) {
        return res.status(500).send({msg: "error logging in", error: error})
    }
} 

export const logout = (req,res) =>{
    //clear cookie
    try {
        res.clearCookie("token")
        return res.status(200).send({msg: "successfully logged out"})
    } catch (error) {
        return res.status(500).send({msg: "error logging out"})
    }
}

export const myDetails = async (req, res) =>{
    //get user details through userid
    const userId = req._id;
    
    try {
        const user = await User.findById(userId)
        
        if(!user){
            return res.status(404).send({msg: "user not found"})
        }
        return res.status(200).send({user})
    } catch (error) {
        return res.status(500).send({msg: "error getting myDetails", error})
    }
} 

