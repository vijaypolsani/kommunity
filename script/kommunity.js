angular.module('lithium', [])

.controller('SimpleController', function($scope, $http) {

console.log("Rest call parameters starting.");

var url = 'http://hackapi.klout:8080/community.json/community/lithosphere.prod/user/19/score';
var responsePromise = $http.jsonp( url,
             {  
             	headers: {
	        	'Authorization': 'Basic NDllcnM6ZWVoMG9vdGg2Q2hhaDdJ',
	        	}
              }
            );

responsePromise.success(function(data, status) {
	        console.log("Success: Status="+status );
	        console.log("Success: Status="+data );

});
responsePromise.error(function(data, status) {
	        console.log("Exception: "+ status);
	    });
});