const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mountRoutes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

mountRoutes(app);
app.get('/', function(req, res) {
  res.send('Hello World');
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
