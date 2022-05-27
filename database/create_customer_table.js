var db_con = require("../env");

var insert = [
  "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY",
  "name CHAR(255)",
  "email CHAR(255) UNIQUE",
  "password CHAR(255)",
  "phone CHAR(255)",
  "age CHAR(255)",
  "gender CHAR(255)",
  "hobby VARCHAR(255)",
  "verified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
];

var sql = `CREATE TABLE Customers (${insert[0]},${insert[1]},${insert[2]},${insert[3]},${insert[4]},${insert[5]},${insert[6]},${insert[7]},${insert[8]})`;

var customer = db_con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Customer Table Created");
});

module.exports = customer;
