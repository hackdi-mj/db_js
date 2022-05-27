var express = require("express");
var app = express();
var db_cont = require("../env");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Read
app.get("/operational", function (req, res) {
  db_cont.query("SELECT * FROM operational", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

// Create
app.post("/operational_post", function (req, res) {
  db_cont.query("SELECT * FROM operational", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

//  Update
app.post("/operational_", function (req, res) {
  db_cont.query("SELECT * FROM operational", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

//  Delete
app.delete("/operational_delete", function (req, res) {
  db_cont.query("SELECT * FROM operational", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

app.listen(8081, () => {
  var host = "localhost";
  var port = 8081;
  console.log(`Customer API client at http://%s:%s/operational`, host, port);
  console.log("");
});
