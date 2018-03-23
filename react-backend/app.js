var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const auth = require('./auth');
const authenticated = require('./auth').authenticated;

// const User = require('./models/users');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Authentication Middleware

auth(app);

// app.post('/register', (req, res) => {
//   console.log(req.body);
//   User.create({
//       FirstName: req.params.firstname,
//       LastName: req.params.lastName, 
//       Phone: req.number,
//       Email: req.email,
//       Password: req.password
//     })
//     .then((User)=>{
//       User.save();
//     })
// });

app.use(express.static(path.join(__dirname, 'public')));

app.use(index);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
