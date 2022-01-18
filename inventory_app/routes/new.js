const { json } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../db/dbconnect");


module.exports = (db) => {
  router.get('/', (req, res) => {
    res.render('newwarehouse')
  
  });
  router.post('/', (req, res) => {
    console.log(req.body)
      const { name, city} = req.body;
      const queryString = `INSERT INTO warehouse (name,city)
      VALUES ($1, $2)
      RETURNING *;;`
      const values = [name, city];
      db.query(queryString, values)
      
        .then(() => {
          res.redirect('/warehouse')
        })
        .catch((err) => {
          return console.log("query error:", err);
        });
       
    })

  

  return router;
  }
