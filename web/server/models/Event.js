var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EventSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 4,
	},
	type: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	host: {
		type: String,
	}
},{timestamps:true});
var Event = mongoose.model('Event', EventSchema);