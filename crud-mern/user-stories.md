server
folder - model,lib,controller n routes
dependency - express, cors, mongoose, bcrypt, nodemon,dotenc, cookie-parser
controller - 
lib- db connection
routes - routes using ecpress. router
models - schema n models
index.js - main app()

client
dependency - vite,  jsonwebtoken, cookieparser, dom router, react toastify
 folders - components -Header  , page -Home signup-login, utils - handleError, middleware - verifyToken
App.jsx - main router

start -sequence
1- index - express.json
2- models
3- routes
4 - controller
5 - Db connect - mongodb setup
6 - controller - signup- hashed password- bcrypt, login - jwt.sign n res.cookie ("token", jwtToken, {expires} ), logout - cookie.clear
7 - use postman to check backend