var mysql = require("mysql");

var DB_DATABASE = "db_demo3";
var DB_USERNAME = "root";
var DB_PASSWORD = "";

var db = mysql.createConnection({
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully !");
});

module.exports = db;
