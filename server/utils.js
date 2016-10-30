/**
 * Utils functions
 * @since   October 2016
 * @author  Federico Sosa (federico.develop@gmail.com)
 */
 
module.exports = {
    "isItQuestion": function(message) {
        var questionLeads = ["what", "when", "who", "why", "?"];
        
        var isQuestion = false;
        var i = 0;
        
        while (!isQuestion && i < questionLeads.length) {
            isQuestion = message.toLowerCase().includes(questionLeads[i++]);
        }
        
        return isQuestion;
    }
};
