const { json } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../db/dbconnect");


module.exports = (db) => {
  router.get('/', (req, res) => {
    res.render('create')
  
  });
  router.post('/', (req, res) => {
    
      const { name, description, total, location, warehouse_id} = req.body;
      const queryString = `INSERT INTO inventory (name, description, total, location, warehouse_id)
      VALUES ($1, $2, $3, $4, $5 )
      RETURNING *;;`
      const values = [name, description, total, location, warehouse_id ];
      db.query(queryString, values)
        .then(() => {
          res.redirect('/')
        })
        .catch((err) => {
          return console.log("query error:", err);
        });
       
    })

  

  return router;
  }