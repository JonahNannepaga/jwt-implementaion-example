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
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Impka2tka2tka2tka2tka2siLCJpYXQiOjE2NDQ0NzIzMTksImV4cCI6MTY0NzA2NDMxOX0.ycK5iPn-RGUdhrMNL43Tf6YNWzL6sDHPCJGC32EdPsU