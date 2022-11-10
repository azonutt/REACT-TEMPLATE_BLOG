const UserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const register = (req, res, next) => {
    UserModel.findOne({ username: req.body.username }, (err, data) => {
        var hash = bcrypt.hashSync(req.body.password, 12);
        if (err) {
            console.log(err);
        } else if (data) {
            res.json({ message: 'Username already exists' })
        } else {
            let person = new UserModel({
                username: req.body.username,
                password: hash
            })
            console.log("person", person);
            person.save((err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    passport.authenticate('local', (err, user, info) => {
                        if (err) throw err;
                        if (!user) res.json({ message: 'No user exists!' });
                        else {
                            req.logIn(user, (err) => {
                                if (err) throw err;
                                res.status(200).json({
                                    success: true,
                                    redirectUrl: '/splash',
                                    user: req.user
                                })
                            })
                        }
                    })(req, res, next)
                }
            })
        }
    })
}

function login(req, res, next) {
     passport.authenticate('local', (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("Incorrect Password");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                UserModel.find({}, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.status(200).json({
                            success: true,
                            redirectUrl: '/splash',
                            user: req.user
                        })
                    }
                })
            })
        }
    })(req, res, next);
}

function home(req, res) {
    console.log("hello");
    res.status(200).json({
        success: true,
        redirectUrl: '/',
        user: req.user
    })
}


const deleteUser = (req, res) => {
    console.log("req", req.body._id)
    UserModel.findByIdAndRemove({ _id: req.body._id },
        (err, data) => {
            console.log("data", data);
            if (err) {
                // alert("User Deleted")
                console.log(err);
            } else {
                res.status(200).json({
                    success: true,
                    redirectUrl: '/main'
                })
            }
        })
};

const changePassword = (req, res) => {
    console.log(req.body);
    if (req.body.newpassword == req.body.confirm) {
        var newhash = bcrypt.hashSync(req.body.newpassword, 12)
        console.log(newhash);
        UserModel.findOneAndUpdate({ username: req.body.username }, {
            password: newhash
        }, {
            new: true
        },
            (err, data, info) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('data', data);
                    req.logout()
                    res.status(200).json({
                        success: true,
                        redirectUrl: '/'
                    })
                }
            })
    }
}
const calendar = (req, res) => {
    console.log("calendar");
    res.status(200).json({
        success: true,
        redirectUrl: '/splash',
        user: req.user
        
    })
}

module.exports = { register, login, home, deleteUser, changePassword, calendar }