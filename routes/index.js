var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');


function getGithubUsers(handle) {
  return fetch('https://api.github.com/users/' + handle)
  .then(function(res) {
    return res.json();
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    msg: 'Hello World'
  })
});

router.get('/users', function(req,res){
  getGithubUsers(req.param('handle')).then(function(users) {
    res.json(users);
  });
});

module.exports = router;
