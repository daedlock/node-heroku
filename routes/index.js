var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', (req, res) => {
  res.json({
    msg: 'Hello World'
  });
});

router.get('/users', function (req, res) {
  const getGithubUsers = (handle) => fetch('https://api.github.com/users/' + handle)
    .then((res) => res.json());

  getGithubUsers(req.param('handle')).then((users) => res.json(users));
});

router.get('/repo', function (req, res) {
  const getGithubRepo = (repo) => fetch('https://api.github.com/repos/' + repo)
    .then((res) => res.json());

  console.log(req.param('repo'));

  getGithubRepo(req.param('repo')).then((repo) => res.json(repo));
});

router.get('/time2', function (req, res) {
  res.json({ time: new Date().getTime() });
})

router.get('/view', function (req, res) {
  res.render('index');
});
module.exports = router;
