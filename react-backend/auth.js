const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const User = require('./models/users');
const bcrypt = require('bcrypt');

const auth = (app) => {
  app.use(cookieParser());

  app.use (session({
    secret: 'whatever',
    resave: true,
    saveUninitialized: true
  }));


  passport.use(new LocalStrategy(
    function(email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // app.configure(function() {
  //   app.use(express.static('public'));
  //   app.use(express.cookieParser());
  //   app.use(express.bodyParser().urlencoded({ extended: false}));
  //   app.use(express.session({ secret: 'whatever' }));
  //   app.use(passport.initialize());
  //   app.use(passport.session());
  //   app.use(app.router);
  // });

  app.get('/login',
    passport.authenticate('local', { successRedirect: '/user/:email',
                                    failureRedirect: '/',
                                    failureFlash: true })
  );

  app.get('/logout', function(req, res, next) {
    console.log('logging out');
    req.logout();
    res.redirect('/');
  });
}

const authenticated = (req, res, next) => {
  if (req.authenticated()) {
    console.log('it worked!');
    return next();
  }

  console.log("that didn't work at all");
  res.reredirect('/');
};

module.exports = auth;
module.exports.authenticated = authenticated;