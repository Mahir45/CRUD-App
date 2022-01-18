const express = require("express");
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

  return router;
};
