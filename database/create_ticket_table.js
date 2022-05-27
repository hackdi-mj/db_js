var db_con = require("../env");

var insert = [
  "id INT NOT NULL AUTO_INCREMENT",
  "venueID INT NOT NULL",
  "custID INT NOT NULL",
  "orderID INT NOT NULL",
  "booking_time CHAR(50)",
  "date CHAR(30)",
  "sport_type CHAR(50)",
  "venue_type CHAR(50)",
  "payment_status CHAR(15)",
  "total_payment INT(6)",
  "status CHAR(10)",
  "PRIMARY KEY (ticketID)",
];

var sql = `CREATE TABLE Ticket (${insert[0]},${insert[1]},${insert[2]},${insert[3]},${insert[4]},${insert[5]},${insert[6]},${insert[7]},${insert[8]},${insert[9]},${insert[10]},${insert[10]})`;

var ticket = db_con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Ticket Table Created");
});

module.exports = ticket;
