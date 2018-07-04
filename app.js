const express = require('express');
const bodyParser = require('body-parser');
const mountRoutes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mountRoutes(app);
app.get('/', function(req, res) {
  res.send('Hello World');
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
