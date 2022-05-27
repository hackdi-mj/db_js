var express = require("express");
var app = express();
var db_cont = require("../env");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Read
app.get("/venue", function (req, res) {
  db_cont.query("SELECT * FROM venue", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

// Create
app.post("/venue", function (req, res) {
  db_cont.query("SELECT * FROM venue", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

//  Update
app.post("/venue", function (req, res) {
  db_cont.query("SELECT * FROM venue", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

//  Delete
app.delete("/venue", function (req, res) {
  db_cont.query("SELECT * FROM venue", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

app.listen(8081, () => {
  var host = "localhost";
  var port = 8081;
  console.log(`Customer API client at http://%s:%s/venue`, host, port);
  console.log("");
});
