const express = require('express');
const router = express.Router();
const Users = require('../models/user')

router.get('/register', (req, res) => {
  res.render('./guest/register');
})

// router.post('/register', (req, res) => {

// })

router.get('/login', (req, res) => {
  res.render('./guest/login');
})

module.exports = router;
