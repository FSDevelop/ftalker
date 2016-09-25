/**
 * Script that runs the app
 * @author  Federico Sosa (federico.sosa@modelit.xyz)
 * @since   September 2016
 */
var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(8080, function() {
    console.log('Listening to port 8080...');
});
