var db_con = require("../env");

var insert = [
  "historyID INT NOT NULL AUTO_INCREMENT",
  "ticketID INT NOT NULL",
  "custID INT NOT NULL",
  "PRIMARY KEY (historyID)",
];

var sql = `CREATE TABLE History (${insert[0]},${insert[1]},${insert[2]},${insert[3]})`;

var history = db_con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("History Table Created");
});

module.exports = history;
