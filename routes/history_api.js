var express = require("express");
var app = express();
var db_cont = require("../env");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Read
app.get("/history", function (req, res) {
  db_cont.query("SELECT * FROM history", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

// Create
app.post("/history", function (req, res) {
  db_cont.query("SELECT * FROM history", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

app.listen(8081, () => {
  var host = "localhost";
  var port = 8081;
  console.log(`Customer API client at http://%s:%s/history`, host, port);
  console.log("");
});
