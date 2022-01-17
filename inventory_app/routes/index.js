const express = require("express");
const router = express.Router();


/* GET home page. */
module.exports = (db) => {
router.get("/", (req, res) => {
  db.query(`SELECT * FROM inventory;`)

    .then((result) => {
      console.log(result.rows);
      const templateVars = {
        rows: result.rows
      }
  res.render("index", templateVars);
    })
    .catch((err) => {
      console.log(err + "error");
    });
});
return router;
}


