const passport = require('passport');
const jwt = require('jsonwebtoken');
const BearerStrategy = require('passport-http-bearer').Strategy;
const User = require('../models/auth');

passport.use(new BearerStrategy(
    (token, done)=> {
        // console.log(token);
      const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    //   console.log(decodedData);
      User.findById(decodedData.userId, (err, user)=> {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user, { scope: 'all' });
      });
    }
  ));