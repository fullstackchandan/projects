import express from 'express'
import {login, logout, myDetails, signup} from '../controllers/UserAuthController.js'

const UserAuthRouter = express.Router()

UserAuthRouter.post('/signup', signup)

UserAuthRouter.post('/login', login)

UserAuthRouter.post('/logout', logout)

UserAuthRouter.get('/my-details', myDetails)

export default UserAuthRouter;

