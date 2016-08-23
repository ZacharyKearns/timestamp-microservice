var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/:date', function (req, res) {
  if (Date.parse(req.params.date)) {
    var date = new Date(Date.parse(req.params.date));
    var natural = date.toDateString().split(" ");
    switch (natural[1]) {
      case "Jan":
      natural[1] = "January";
      break;
      case "Feb":
      natural[1] = "February";
      break;
      case "Mar":
      natural[1] = "March";
      break;
      case "Apr":
      natural[1] = "April";
      break;
      case "Jun":
      natural[1] = "June";
      break;
      case "Jul":
      natural[1] = "July";
      break;
      case "Aug":
      natural[1] = "August";
      break;
      case "Sep":
      natural[1] = "September";
      break;
      case "Oct":
      natural[1] = "October";
      break;
      case "Nov":
      natural[1] = "November";
      break;
      case "Dec":
      natural[1] = "December";
      break;
    }
    natural = natural[1] + " " + natural[2] + ", " + natural[3];
    res.send({ "unix": Date.parse(req.params.date) / 1000, "natural": natural });
  } else {
    res.send({ "unix": null, natural: null });
  }

});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
