/**
 * Node routes
 * @author  Federico Sosa (federico.develop@gmail.com)
 * @since   October 2016
 */
 
var mongo = require('./controllers/mongo.controller');
 
module.exports = function(app) {
    app.post('/message', function(req, res) {
        mongo.insert('message', req.body, function(result) {
            res.send(result);
        });
    })
};
