const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const api = express()
const rideModel = require('../models/ride.model')
const rideController = require('../controllers/ride.controller')
const userController = require('../controllers/user.controller')
const authController = require('../controllers/auth.controller')
const verifyToken = require('../middlewares/verify.middleware')
const upload = require('../middlewares/fileupload.middleware')


require('dotenv').config()
api.use(express.json())
api.use(cors())
api.use('/media', express.static('media'))
api.use(express.urlencoded({ extended: true }))
api.use(express.json())


const PORT = process.env.PORT || 3000
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () =>{
    console.log('Connected to Database')
    api.listen(PORT, () => console.log(`Server Started on port ${PORT}`))
})




api.get('/', (req, res) => {
    res.status(200).send('RIDES')
})
// ride routes
api.get("/api/rides",rideController.getRides);
api.get("/api/rides/:id",verifyToken,rideController.getRideById);
api.post("/api/ride",verifyToken,rideController.createRide);

// user routes
api.get("/api/users", userController.getUsers);
api.get("/api/user/:id",userController.getUserById);
api.post("/api/user",upload,authController.signUp);
api.post("/api/user/login", authController.login);

// router.put("api/users/:id", userController.updateUser);

// auth routes

