const {Pool} = require ('pg')

const db = new Pool({
  user: 'mahirahmed',
  host: 'localhost',
  database: 'shopify',
  port: 5432
});
module.exports = db