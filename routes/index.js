var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({
    msg: 'Hello World'
  });
});

router.get('/users', function(req,res){
  const getGithubUsers = (handle) => fetch('https://api.github.com/users/' + handle)
  getGithubUsers(req.param('handle')).then((users) => res.json(users));
});

module.exports = router;
