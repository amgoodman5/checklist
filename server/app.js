const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const key = require('./config/key')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express();

passport.use(new GoogleStrategy({
    // authorizationURL: 'https://www.example.com/oauth2/authorize',
    // tokenURL: 'https://www.example.com/oauth2/token',
    clientID: key.googleClientID,
    clientSecret:key.googleClientSecret,
    callbackURL: "/auth/google/callback"
  }, (accessToken) => {
    console.log(accessToken);
  // function(accessToken, refreshToken, profile, cb) {
  //   User.findOrCreate({ exampleId: profile.id }, function (err, user) {
  //     return cb(err, user);
    // });
  })
);
// https://accounts.google.com/o/oauth2/v2/auth?response_type=
// code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fgoogle%2Fcallback&scope=
// profile%20email&client_id=436967431502-jq7045klr2gasnqsvt6pfu886n52jrst
// .apps.googleusercontent.com


app.get('/auth/google', passport.authenticate('google', {
  scope:['profile', 'email']
})
);
app.get('/auth/google/callback', passport.authenticate('google'))


const list = require('./api/list')



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/v1/list', list)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {


  res.status(err.status || 500);
  res.json({
    message:err.message,
    error:req.app.get('env') === 'development' ? err : {}

  });
});

module.exports = app;
