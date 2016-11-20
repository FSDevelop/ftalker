/**
 * Messages directive
 * @author  Federico Sosa (federico.sosa@modelit.xyz)
 * @since   November 2016
 */

app.directive('messages', function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            /*
            var scrollHeight = elem[0].scrollHeight;
            setInterval(function() {
                alert();
                elem[0].scrollTop = scrollHeight + 40;
            }, 1000);*/
        }
    };
});
