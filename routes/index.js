const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('./guest/home');
});

router.get('/register', (req, res) => {
  res.render('./guest/register');
})

router.get('/login', (req, res) => {
  res.render('./guest/login');
})

module.exports = router;
