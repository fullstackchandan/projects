import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    pictures:{
        type: String
    },
},
{timeStamps: true }
)

const User = mongoose.model("User", UserSchema)

export default User