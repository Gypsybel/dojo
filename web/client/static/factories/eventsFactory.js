app.factory('eventsFactory', ['$http', function($http){
	function eventsFactory(){
		this.getEvents = function(callback){
			$http.get('/schedule').then(function(returned_data){ //send get request to our route that returns all events as json
				if(typeof(callback) == 'function'){ //if our callback is a function
					callback(returned_data.data); //we apply it to our returned events
				}
			});
		};
		this.newEvent = function(eventInfo, callback){
			$http.post('/schedule', eventInfo).then(function(returned_data){ //send post request to route that creates new event
				if(typeof(callback) == 'function'){ //if our callback is a function
					callback(returned_data.data); //we apply it to our newly created event
				}
			});
		};
		this.deleteEvent = function(eventId, callback){
			$http.delete('/schedule/'+eventId).then(function(returned_data){ //send delete request to route that deletes event
				if(typeof(callback) == 'function'){ //we only get data back if there are errors, but
					callback(returned_data.data); //if our callback is a function, we'll apply it to those potential errors
				}
			});
		};
		this.showEvent = function(eventId, callback){
			$http.get('/schedule/'+eventId).then(function(returned_data){ //send get request to route that gives us the event we request
				if(typeof(callback) == 'function'){ //if our callback is a function
					callback(returned_data.data); //we apply it to the returned event
				}
			});
		};
		this.updateEvent = function(eventId, eventInfo, callback){
			$http.put('/schedule/'+eventId, eventInfo).then(function(returned_data){ //send put request to route that updates event we specify
				if(typeof(callback) == 'function'){ //if our callback is a function
					callback(returned_data.data); //we apply it to the returned, updated event
				}
			});
		};
	}
	return new eventsFactory(); //our events factory is an object constructor, so we need to return an instance of it
}]);