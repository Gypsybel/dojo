var mongoose = require('mongoose'); //we need mongoose to connect to the db
var EventSchema = new mongoose.Schema({ //create a new schema called EventSchema
	title: { //an event must have a title
		type: String, //the title should be a string
		required: true, //it's required
		minlength: 4, //it must be at least 4 characters long
	},
	description: { //an event must have a description
		type: String, //the description should be a string
		required: true, //it's required
		minlength: 4, //it must be at least 4 characters long
	},
	type: { //an event must have a type
		type: String, //the type should be a string
		required: true, //it's required
	},
	date: { //an event must have a date
		type: Date, //the date should be a date
		required: true, //it's required
		unique: true, //it must be unique - we don't want to schedule two different events for the same day
	},
	host: { //an event could have a host
		type: String, //the host should be a string
	}
},{timestamps:true}); //timestamps track when an event is created & updated
var Event = mongoose.model('Event', EventSchema); //create a model based off of our event schema