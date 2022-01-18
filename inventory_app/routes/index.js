const express = require("express");
const { Querystring } = require("request/lib/querystring");
const app = require("../app");
const router = express.Router();

/* GET home page. */
module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(
      `
  SELECT 
	inventory.id,
  warehouse.name,
	inventory.total,
	inventory.description,
  inventory.location
FROM
	inventory
 LEFT JOIN warehouse
    ON warehouse.id = inventory.warehouse_id

  ;`
    )

      .then((result) => {
        console.log(result.rows)
        const templateVars = {
          rows: result.rows,
        };
        res.render("index", templateVars);
      })
      .catch((err) => {
        console.log(err + "error");
      });
  });

router.post("/delete/:id", (req,res) => {
  const queryString = `DELETE FROM inventory WHERE inventory.id= $1 RETURNING *;`
  
  const id = req.params.id
db.query(queryString, [id])
.then(() => {

  res.redirect('/')
})
.catch((err) => {
  console.log(err + 'error')
})
})






  return router;
};

