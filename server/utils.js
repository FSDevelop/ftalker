/**
 * Utils functions
 * @since   October 2016
 * @author  Federico Sosa (federico.develop@gmail.com)
 */
 
module.exports = {
    "isItQuestion": function(message) {
        return message.match(/what|when|who|why|\?/i);
    }
};
