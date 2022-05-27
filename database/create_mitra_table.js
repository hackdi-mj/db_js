var db_con = require("../env");

var insert = [
  "mitraID INT NOT NULL AUTO_INCREMENT",
  "username CHAR(25)",
  "email CHAR(255)",
  "password CHAR(255)",
  "venue_name CHAR(255)",
  "venue_logo VARCHAR(255)",
  "phone CHAR(255)",
  "total_venue INT(2)",
  "address VARCHAR(255)",
  "partnership BOOL",
  "verified_at CHAR(15)",
  "PRIMARY KEY (mitraID)",
  "UNIQUE (email)",
];

var sql = `CREATE TABLE Mitra (${insert[0]},${insert[1]},${insert[2]},${insert[3]},${insert[4]},${insert[5]},${insert[6]},${insert[7]},${insert[8]},${insert[9]},${insert[10]},${insert[11]},${insert[12]})`;

var mitra = db_con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Mitra Table Created");
});

module.exports = mitra;
