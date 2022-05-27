var db_con = require("../env");

var insert = [
  "operationalID INT NOT NULL AUTO_INCREMENT",
  "venueID INT NOT NULL",
  "time CHAR(15)",
  "available BOOL",
  "PRIMARY KEY (operationalID)",
];

var sql = `CREATE TABLE Operational (${insert[0]},${insert[1]},${insert[2]},${insert[3]},${insert[4]})`;

var operational = db_con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Operational Table Created");
});

module.exports = operational;
