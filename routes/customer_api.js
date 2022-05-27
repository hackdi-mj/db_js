var express = require("express");
var app = express();
var db_cont = require("../env");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Read
app.get("/customers", function (req, res) {
  db_cont.query("SELECT * FROM customers", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Login 

// Create
app.post("/customers/register", urlencodedParser, function (req, res, next) {
  var sql =
    "INSERT INTO `customers`(`name`,`email`, `password`,`phone`,`age`, `gender`, `hobby`) VALUES ('" +
    req.body.name +
    "','" +
    req.body.email +
    "','" +
    req.body.password +
    "','" +
    req.body.phone +
    "','" +
    req.body.age +
    "','" +
    req.body.gender +
    "','" +
    req.body.hobby +
    "')";
  db_cont.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  res.render("index", { title: "Hackdi" });
});

app.post("/customers/login", urlencodedParser, function (req, res, next) {
  var sql = `SELECT * FROM customers WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;

  db_cont.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  res.render("index", { title: "Hackdi" });
});

//  Update
app.post("/update_profile", function (req, res) {
  db_cont.query(
    "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'",
    function (err, result) {
      if (err) throw err;
      res.send({
        body: result,
      });
    }
  );
});

//  Delete
app.delete("/del_profile", function (req, res) {
  db_cont.query(
    "DELETE FROM customers WHERE address = 'Mountain 21'",
    function (err, result) {
      if (err) throw err;
      res.send({
        body: result,
      });
    }
  );
});

app.listen(8000, () => {
  var host = "localhost";
  var port = 8000;
  console.log("");
  console.log("API CLIENTS");
  console.log("=================================================");
  console.log("");
  console.log(`Customer API client at http://%s:%s/customers`, host, port);
  console.log("");
});
