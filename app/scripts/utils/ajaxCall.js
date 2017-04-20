/**
  * @desc Requests a network call via ajax
  * @param object obj- ajax call paramters
  * @return object - success or failure
*/
var $ = require('jquery')

var ajaxCall = {
	get:function(obj){
		$.ajax({
            url: obj.api,
            type: "GET",
            success: function(res) {
                var data = JSON.parse(res);
                obj.successCB(data);
            },
            error: function(res) {
                obj.failureCB(res);
            },
        })
	}
};
module.exports = ajaxCall;
