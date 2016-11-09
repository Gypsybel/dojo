//index, new, delete, show, update
var mongoose = require('mongoose');
var Event = mongoose.model('Event');

function EventsController(){
	this.index = function(req, res){
		Event.find({}, function(err, events){ //find all events
			if(err){ //if we have an error
				return res.json(err); //return the error as a json response
			} //otherwise
			return res.json(events); //return all events as a json response 
		});
	};
	this.new = function(req, res){
		var eventDate = new Date(req.body.date); //create a Date object based on the date of the event
		var now = new Date(); //get the current date
		if(eventDate < now){ //if the date of the event is smaller than today's date, we know the event date is in the past
			return res.json({'errors': 'Event must be in the future'}); //return an error message
		} //if we pass the date validation
		//we only want to allow 10 upcoming events at any one time
		Event.count({}, function(err, count){ //get a count of all events
			if(err){ //if there's an error
				return res.json(err); //return the error as a json response
			} //otherwise
			if(count >= 10){ //if the count is greater than or equal to ten
				return res.json({'errors': 'Our schedule is full right now! We can only have 10 scheduled events.'}); //return our own custom error
			} //otherwise
		}); //execution of the code will continue as normal below
		var event = new Event(req.body); //create a new event, based on the info sent in the request body
		event.save(function(err, event){ //try to save the new event
			if(err){ //if there's an error
				return res.json(err); //return the error as a json response
			} //otherwise
			return res.json(event); //return the event as a json response
		});
	};
	this.delete = function(req, res){
		var id = req.params.id; //get the id from our url parameters
		Event.remove({_id: id}, function(err){ //remove the event with that id
			if(err){ //if there's an error
				return res.json(err); //return the error as a json response
			}
		});
	};
	//THESE ROUTES NOT YET IN USE, COMING SOON
	this.show = function(req, res){
		var id = req.params.id; //get the id from our url parameters
		Event.getOne({_id: id}, function(err, event){ //get the event with that id
			if(err){ //if there's an error
				return res.json(err); //return the error as a json response
			} //otherwise
			return res.json(event); //return the event as a json response
		});
	};
	this.update = function(req, res){
		var id = req.params.id; //get the id from our url parameters
		Event.getOne({_id: id}, function(err, event){ //get the event with that id
			if(err){ //if there's an error
				return res.json(err); //return the error as a json response
			} //otherwise
			event.name = req.body.name; //update the event's info based on the info in the request body
			event.type = req.body.type;
			event.date = req.body.date;
			event.host = req.body.host;
			event.save(function(err, event){ //try to save the updated event
				if(err){ //if there's an error 
					return res.json(err); //return the error as a json response
				} //otherwise
				return res.json(event); //return the updated event as a json response
			});
		});
	};
}
module.exports = new EventsController(); //our events controller is an object constructor, so we need to return a new instance of it