const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    profile_picture: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },

})


module.exports = mongoose.model('User', userSchema)