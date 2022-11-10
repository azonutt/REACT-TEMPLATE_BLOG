const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email:{
        type: String
    },
    dogname: {
        String
    },
    number: {
        type: Number
    },
    date: {
        type: Date
    }
})
const UserModel = mongoose.model('login', UserSchema)
module.exports = UserModel;