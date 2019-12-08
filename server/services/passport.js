const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  //same user that was added to the DB
  done(null, user.id); //NOT the google profile id! but the _id:5de5aba68340804294bb24e9 googleId:"105626625191330283341"
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //console.log("access token:", accessToken);
      //console.log("refresh token:", refreshToken);
      //console.log("profile:", profile);
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //We already have a record with the given profile ID
        done(null, existingUser);
      } else {
        //We don't have a user record with this id, create one!
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);

//Code after refactoring to sync/await 65
