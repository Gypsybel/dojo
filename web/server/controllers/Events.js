//index, new, delete, show, update
var mongoose = require('mongoose');
var Event = mongoose.model('Event');

function EventsController(){
	this.index = function(req, res){
		Event.find({}, function(err, events){
			if(err){
				return res.json(err);
			}
			return res.json(events);
		});
	};
	this.new = function(req, res){
		var eventDate = new Date(req.body.date);
		var now = new Date();
		if(eventDate < now){
			return res.json({'errors': 'Event must be in the future'});
		}
		var event = new Event(req.body);
		event.save(function(err, event){
			if(err){
				return res.json(err);
			}
			return res.json(event);
		});
	};
	this.delete = function(req, res){
		var id = req.params.id;
		Event.remove({_id: id}, function(err){
			if(err){
				return res.json(err);
			}
		});
	};
	this.show = function(req, res){
		var id = req.params.id;
		Event.getOne({_id: id}, function(err, event){
			if(err){
				return res.json(err);
			}
			return res.json(event);
		});
	};
	this.update = function(req, res){
		var id = req.params.id;
		Event.getOne({_id: id}, function(err, event){
			if(err){
				return res.json(err);
			}
			event.name = req.body.name;
			event.type = req.body.type;
			event.date = req.body.date;
			event.host = req.body.host;
			event.save(function(err, event){
				if(err){
					return res.json(err);
				}
				return res.json(event);
			});
		});
	};
}
module.exports = new EventsController();