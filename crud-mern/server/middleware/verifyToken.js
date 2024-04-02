import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

//middleware - pass req, res, next
const verifyToken = (req, res, next) =>{
    
    const token = req.cookies.token;
    if(!token){
        return res.status(401).send({msg: "unauthorised access denied"})
    }

    jwt.verify(token, process.env.JWT_KEY, (err,data)=>{
        if(err){
            return res.status(401).send({msg: "unauthorised access denied"})
        }   
        req._id = data._id;
        next()
    })
}

export default verifyToken;

