var express = require('express');
var router = express.Router();
const User = require('../models/users')
const bcrypt = require('bcrypt');

router.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/user')

  .post((req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      // Store hash in database
      if(err) {
        console.log("Didn't work.")
      } else {
      console.log(hash);
      User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname, 
        number: req.body.number,
        email: req.body.email,
        password: hash
      })
      }
    })
  })
    
  .get((req, res) => {
    User.findAll()
      .then(allUsers => {
        res.json(allUsers);
        // console.log(allUsers);
      })
  })

module.exports = router;
