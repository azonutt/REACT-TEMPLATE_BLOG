const mongoose = require('mongoose')
//your files were in the wrong root directory. the ensure .env and node modules were outside of the react template app

const express = require("express");
const cors = require('cors')
require('dotenv').config()
const passport = require('passport')
// const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require("body-parser")
const app = express();
const UserModel = require('./backend/models/UserModel')
const userRoutes = require('./backend/routes/userRoutes')
const helmet = require('helmet')
const LocalStrategy = require("passport-local")
const {ObjectID} = require('mongodb');

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  // cookie: {secure: false}
}));

// app.use(cookieParser('process.env.SESSION_SECRET')) 
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet.hidePoweredBy({setTo: 'PHP 4.2.0'}))


mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true}, (err, data)=>{
  if(err){
    console.log('Database error: ' + err);
  }else{
    console.log('Success');
  }
})

passport.serializeUser((user, done) => {
  done(null, user._id);
})
passport.deserializeUser((id, done) => {
  UserModel.findOne(
    { _id: new ObjectID(id) },
    (err, doc) => {
      done(null, doc);
    }
  );
});
passport.use(new LocalStrategy(
  function (username, password, done) {
    UserModel.findOne({ username: username }, function (err, user) {
      console.log('User ' + username + ' attempted to log in.');
      if (err) throw err;
      if(!user) {return done(null, false)}

      bcrypt.compare(password, user.password, (err, result)=>{
        if(err) throw err;
        if(result == true){
          return done(null, user)
        }else{
          return done(null, false)
        }
      })
    });
  }
))

app.use('/', userRoutes)


const PORT = process.env.PORT || 8800;

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});