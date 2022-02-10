const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const user = {
    '_id': 'jdkkdkkdkkdkkdkk',
    'name': 'Jonah'
}
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

console.log(generateToken(user._id));