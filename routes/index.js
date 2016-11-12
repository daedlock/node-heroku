var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    msg: 'Hello World'
  })
});

router.get('/users', function(req,res){
  var users = [
    'user1',
    'user2',
    'user3'
  ]

  res.json(users);
});

module.exports = router;
