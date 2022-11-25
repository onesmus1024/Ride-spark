const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()



const verifyToken = (req, res, next) => {
    
    const bearerHeader = req.headers['authorization']
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        
        jwt.verify(bearerToken, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                res.status(403).json({ message: err.message })
                res.sendStatus(403)
            } else {
                req.user =user['data']._id
                next()
            }
        })
       
    } else {
        res.sendStatus(403)
    }
}

module.exports = verifyToken