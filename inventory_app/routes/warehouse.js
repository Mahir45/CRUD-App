const express = require("express");
const router = express.Router();


/* GET home page. */
module.exports = (db) => {
router.get("/", (req, res) => {
  db.query(`SELECT * FROM warehouse;`)

    .then((result) => {
     
      const templateVars = {
        rows: result.rows
      }
  res.render("warehouse", templateVars);
    })
    .catch((err) => {
      console.log(err + "error");
    });
});


return router;
}
