const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const knex = require('../../db/index.js');

passport.ues(new GoogleStrategy({ 
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "localhost:3000"
},
  function (accessToken, refreshToken, profile, cb) {
    knex('users').where({profile.id}).first(),
    .then((user) => { done(null, user); })
    .catch((err) => { done(err, null); });
  }
})

