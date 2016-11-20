/**
 * Node routes
 * @author  Federico Sosa (federico.develop@gmail.com)
 * @since   October 2016
 */
 
var mongo = require('./controllers/mongo.controller');
var utils = require('./utils');
 
module.exports = function(app) {
    app.post('/message', function(req, res) {
        var message = req.body;
        
        message.is_question = utils.isItQuestion(message.text);
        
        // Insert message into database
        mongo.insert('message', message, function(result) {
            res.send({
                "success": true,
                "data": result
            });
        });
    }),
    app.get('/getMessages', function(req, res) {
        mongo.get('message', function(results) {
            res.send({
                "success": true,
                "data": results
            });
        });
    })
};
