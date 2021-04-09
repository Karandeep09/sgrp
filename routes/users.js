var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',(req,res)=>{
  res.render('users/login');
});

router.get('/dashboard',(req,res)=>{
  res.render('users/dashboard');
});

module.exports = router;
