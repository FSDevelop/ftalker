/**
 * Script that runs the app
 * @author  Federico Sosa (federico.develop@gmail.com)
 * @since   September 2016
 */

// Express stuff
var express = require('express');
var app = express();

// Request body parser (for routes)
var bodyParser = require('body-parser');

// Using body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Public folder will be `public`
app.use(express.static('public'));

// Get node routes
require('./server/routes')(app);

// Listening to port 8080
app.listen(8080, function() {
    console.log('Listening to port 8080...');
});
