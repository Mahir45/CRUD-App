const { json } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../db/dbconnect");


module.exports = (db) => {
  router.get('/', (req, res) => {
    const id = req.query.id
    const queryString = `SELECT * FROM inventory WHERE id = $1`
    db.query(queryString, [id]) 
      .then((result) => {
        const templateVars = {
          item : result.rows[0]
        }
        res.render('edit', templateVars)
      })
    

  
  });
  router.post('/:id', (req, res) => {
    
    const { name, description, total, location } = req.body;
    const id = req.params.id
    const queryString = `UPDATE inventory SET name = $1, description = $2, total = $3, location = $4, warehouse_id = $5, WHERE id = $6;`
    const values = [name, description, total, location, warehouse_id,id];
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