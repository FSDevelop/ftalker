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
        
        mongo.insert('message', message, function(result) {
            res.send(result);
        });
    })
};
