// Require the Express package and create an Express application instance
const express = require('express');
const app = express(); //instance of app

// Define a route for the root URL that sends "Hello World!" as the response
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Start the server and listen for incoming requests on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
