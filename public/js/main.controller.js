/**
 * Main Angular controller
 * @author  Federico Sosa (federico.sosa@modelit.xyz)
 * @since   September 2016
 */
 
app.controller('mainController', ['$scope', '$http', function($scope, $http) {
    
    /**
     * Executed when the page initialize
     */
    $scope.init = function() {
        // Defining error
        $scope.errorDisplay = false;
        $scope.errorMessage = "";
        
        // Define message structure
        $scope.message = {
            "text": ""
        };
        
        $scope.messages = {};
        getMessages();
    };
    
    /**
     * Get all messages from database
     */
    var getMessages = function() {
        $http({ "url": "/getMessages", "method": "GET" }).success(function(response) {
            if (response.success) {
                $scope.messages = response.data;
            } else {
                $scope.errorDisplay = true;
                $scope.errorMessage = 'Error while getting messages from database.';
            }
        });
    };
    
    /**
     * Send message to server
     */
    $scope.sendMessage = function() {
        var message = $scope.message.text;
        
        // Validating messages
        if (message.match(/^[\d\w\?\.\,\s\'\"\!\@\#\$\%\^\&\*\(\)\-\+\=\_]{1,100}$/)) {
            $http({ "url": "/message", "method": "POST", "data": $scope.message }).success(function(response) {
                if (response.success) {
                    getMessages();
                    $scope.message.text = '';
                    moveScrollToBottom('.messages');
                } else {
                    $scope.errorDisplay = true;
                    $scope.errorMessage = 'Error while sending message.';
                }
            });
        } else {
            $scope.errorDisplay = true;
            $scope.errorMessage = 'Invalid message. Message should be between 1-100 characters.';
        }
    };
    
    /**
     * Move scroll of element to bottom
     * @param element (String): css selector
     */
    var moveScrollToBottom = function(element) {
        var messages = $(element);
        var scrollHeight = messages.prop('scrollHeight');
        messages.scrollTop(scrollHeight + 40);
    }
}]);
