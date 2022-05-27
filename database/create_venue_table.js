var db_con = require("../env");

var insert = [
  "venueID INT NOT NULL AUTO_INCREMENT",
  "mitraID INT NOT NULL",
  "operationalID INT NOT NULL",
  "venue_name CHAR(15)",
  "sport_type CHAR(15)",
  "type CHAR(15)",
  "price CHAR(7)",
  "PRIMARY KEY (venueID)",
];

var sql = `CREATE TABLE Venue (${insert[0]},${insert[1]},${insert[2]},${insert[3]},${insert[4]},${insert[5]},${insert[6]},${insert[7]})`;

var venue = db_con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Venue Table Created");
});

module.exports = venue;
