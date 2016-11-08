app.factory('eventsFactory', ['$http', function($http){
	function eventsFactory(){
		this.getEvents = function(callback){
			$http.get('/schedule').then(function(returned_data){
				if(typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		};
		this.newEvent = function(eventInfo, callback){
			$http.post('/schedule', eventInfo).then(function(returned_data){
				if(typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		};
		this.deleteEvent = function(eventId, callback){
			$http.delete('/schedule/'+eventId).then(function(returned_data){
				if(typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		};
		this.showEvent = function(eventId, callback){
			$http.get('/schedule/'+eventId).then(function(returned_data){
				if(typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		};
		this.updateEvent = function(eventId, eventInfo, callback){
			$http.put('/schedule/'+eventId, eventInfo).then(function(returned_data){
				if(typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		};
	}
	return new eventsFactory();
}]);