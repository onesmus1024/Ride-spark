const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, );
    }
    ,
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+'.'+file.mimetype.split('/')[1]);
    }
});


const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
}).single('profile_picture');

module.exports = upload;
