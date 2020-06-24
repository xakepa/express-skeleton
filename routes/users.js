const express = require('express');
const router = express.Router();
const userRegister = require('../handlers/userRegister');
const Users = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/register', (req, res) => {
  res.render('./guest/register');
})

router.post('/register', (req, res) => {
  userRegister(req, res);
  res.redirect(302, '/');
})

router.get('/login', (req, res) => {
  res.render('./guest/login');
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });


  const status = await bcrypt.compare(password, user.password);
  console.log(status);
})

module.exports = router;
