/**
 * Script that runs the app
 * @author  Federico Sosa (federico.sosa@modelit.xyz)
 * @since   September 2016
 */
var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/ftalker';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

app.use(express.static('public'));

app.listen(8080, function() {
    console.log('Listening to port 8080...');
});
