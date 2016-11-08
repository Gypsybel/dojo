app.controller('scheduleController', ['$scope', 'eventsFactory', '$location', function($scope, eventsFactory, $location){
	$scope.events = [];
	$scope.event = {};
	eventsFactory.getEvents(function(events){
		$scope.events = events;
	});
	$scope.newEvent = function(){
		eventsFactory.newEvent($scope.myEvent, function(event){
			console.log(event);
			$scope.events.unshift(event);
		});
	};
	$scope.deleteEvent = function(eventId){
		eventsFactory.deleteEvent(eventId, function(){
			eventsFactory.getEvents(function(events){
				$scope.events = events;
			});
		});
	};
	$scope.showEvent = function(eventId){
		eventsFactory.showEvent(eventId, function(event){
			$scope.event = event;
			$location.url('/show');
		});
	};
	$scope.updateEvent = function(eventId){
		eventsFactory.updateEvent(eventId, $scope.updatedEvent, function(event){
			$scope.event = event;
			eventsFactory.getEvents(function(events){
				$scope.events = events;
			});
			$location.url('/show');
		});
	};
}]);