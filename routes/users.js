const express = require('express');
const router = express.Router();
const Users = require('../models/user')

router.get('/register', (req, res) => {
  res.render('./guest/register');
})

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    await Users.create({ email, password });
  } catch (error) {
    if (error) {
      throw error
    }
  }
  res.redirect(302, '/')
})

router.get('/login', (req, res) => {
  res.render('./guest/login');
})

router.post('/login', (req, res) => {

})

module.exports = router;
