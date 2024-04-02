import express from 'express'
import verifyToken from '../middleware/verifyToken.js'
import {login, logout, myDetails, signup} from '../controllers/UserAuthController.js'

const UserAuthRouter = express.Router()

UserAuthRouter.post('/signup', signup)

UserAuthRouter.post('/login', login)

UserAuthRouter.post('/logout', logout)

UserAuthRouter.get('/my-details', verifyToken ,myDetails)

export default UserAuthRouter;

