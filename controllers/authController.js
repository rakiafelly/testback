const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/auth');
const Token = require('../models/token');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');
const passport = require('passport');

exports.registre = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (user != null) {
      res.status(400).send({ message: "email already used" })
    }
    else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      req.body.password = hash
      await User.create(req.body);
      res.send({ message: 'register succssefully' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'erreur interne dans le serveur' })
  }
}

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (user == null) {
      res.status(400).send({ message: 'email or password are incorrect' })
    }
    else {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({
          userId: user._id,
        }, 'secret', { expiresIn: '1d' });
        res.send({
          message: 'login successfully', token: token
        })
      }
      else {
        res.status(400).send({ message: 'email or password are incorrect' })
      }
    }
  }
  catch (err) {
    res.status(500).json({ message: 'internal error' })
  }
}