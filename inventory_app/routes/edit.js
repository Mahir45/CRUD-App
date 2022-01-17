const { json } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../db/dbconnect");


module.exports = (db) => {
  router.get('/', (req, res) => {
    res.render('edit')
  
  });
 
  return router;
  }