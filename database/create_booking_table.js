var db_con = require("../env");

var insert = [
  "bookingID INT NOT NULL AUTO_INCREMENT",
  "venueID INT NOT NULL",
  "orderID INT NOT NULL",
  "sport_type CHAR(50)",
  "venue_type CHAR(50)",
  "booking_time CHAR(50)",
  "date CHAR(30)",
  "payment_status CHAR(15)",
  "total_payment INT(6)",
  "PRIMARY KEY (bookingID)",
];

var sql = `CREATE TABLE Booking (${insert[0]},${insert[1]},${insert[2]},${insert[3]},${insert[4]},${insert[5]},${insert[6]},${insert[7]},${insert[8]},${insert[9]})`;

var booking = db_con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Booking Table Created");
});

module.exports=booking;


