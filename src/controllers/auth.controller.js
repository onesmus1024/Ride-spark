const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const userModel = require('../models/user.model')

require('dotenv').config()
const generateToken = (user) => {
    return jwt.sign({ data: user }, process.env.JWT_SECRET, { expiresIn: '24h' })
}

signUp = async (req, res) => {
    const user = new userModel({
        _id: mongoose.Types.ObjectId(),
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone_number: req.body.phone_number,
        profile_picture: req.protocol + '://' + req.get('host') +'/' + req.file.path,
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    });
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;


    try {
        const newUser = await user.save();
        res.status(200).json({ token: generateToken(newUser) });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

login = async (req, res) => {
    const user= await userModel.findOne({
            email: req.body.email
        });
    if (!user) {
        return res.status(400).json({
            message: 'User not found'
        });
    }   
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    
    if (!validPassword) {
        return res.status(400).json({
            message: 'Invalid password'
        });
    }
    res.status(200).json({ token: generateToken(user) });
    

 
}


auth = {
    signUp,
    login
}

module.exports = auth