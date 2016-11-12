app.controller('eventsController', ['$scope', 'eventsFactory', '$location', function($scope, eventsFactory, $location){
	$scope.events = []; //initialize events as empty array
	$scope.event = {}; //initialize event as empty object
	$scope.errors = []; //initialize errors as empty object
	eventsFactory.getEvents(function(events){ 
		$scope.events = events; //get all events from our factory
	});
	$scope.newEvent = function(){
		$scope.errors = [];
		eventsFactory.newEvent($scope.myEvent, function(event){ //send event info to factory, factory returns newly created event
			if(!event['errors'] && !event['errmsg']){ //if no errors are returned
				$scope.events.unshift(event); //add the new event to our array of events
				$scope.myEvent = {}; //set myEvent to be an empty object, this clears the input fields on our page
			} else {
				if(event['errmsg']){
					$scope.errors.push('Cannot schedule two events at the same time.')
				}
				if(event['errors']){
					if(typeof(event['errors']) != 'string'){
						for(var key in event['errors']){
							$scope.errors.push(event['errors'][key].message.replace('Path ', ''));
						}
					} else {
						$scope.errors.push(event['errors']);
					}
				}
			}
		});
	};
	$scope.deleteEvent = function(eventId){
		var ind;
		for(var i in $scope.events){ //loop through our events
				if($scope.events[i]._id == eventId){ //find event to be removed in our event array
					$scope.events.splice(i, 1); //splice it out
				}
			}
		eventsFactory.deleteEvent(eventId); //send _id of event to be removed to factory, so it will be removed from the database
	};
	//this functionality not enabled yet - COMING SOON
	$scope.showEvent = function(eventId){
		eventsFactory.showEvent(eventId, function(event){ //send id of event to show to factory
			$scope.event = event; //set scope event to event returned to factory
			$location.url('/show'); //redirect to show page
		});
	};
	$scope.updateEvent = function(eventId){
		eventsFactory.updateEvent(eventId, $scope.updatedEvent, function(event){ //send event id and updated info to factory
			$scope.event = event; //set scope event to returned, updated event (this refreshes it so the updated info displays)
			eventsFactory.getEvents(function(events){ 
				$scope.events = events; //refresh events array so updated event info will be present everywhere
			});
			$location.url('/show'); //redirect to show page
		});
	};
}]);