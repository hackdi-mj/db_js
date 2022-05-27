var express = require("express");
var app = express();
var db_cont = require("../env");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Read
app.get("/customers", function (req, res) {
  db_cont.query("SELECT * FROM customers", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

// Create
app.post("/new_customers", function (req, res) {
  db_cont.query("SELECT * FROM customers", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

//  Update
app.post("/update_profile", function (req, res) {
  db_cont.query("SELECT * FROM customers", function (err, result) {
    if (err) throw err;
    res.send({
      body: result,
    });
  });
});

//  Delete
app.delete("/del_profile", function (req, res) {
  db_cont.query("SELECT * FROM customers", function (err, result) {
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
