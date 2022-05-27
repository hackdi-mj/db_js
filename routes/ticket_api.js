var express = require("express");
var app = express();
var db_cont = require("../env");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Read
app.get("/ticket", function (req, res) {
  db_cont.query("SELECT * FROM ticket", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

// Create
app.post("/ticket", function (req, res) {
  db_cont.query("SELECT * FROM ticket", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

app.listen(8081, () => {
  var host = "localhost";
  var port = 8081;
  console.log(`Customer API client at http://%s:%s/ticket`, host, port);
  console.log("");
});
