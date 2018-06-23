//first get the goose
const mongoose = require('mongoose'),
			Schema = mongoose.Schema;
const UserSchema = new Schema({
	firstname: {
		type: String,
		required: 'Please Enter'
	},
	lastname: {
		type: String,
		required: 'Please Enter'
	},
	email: {
		type: String,
		required: 'Please Enter'
	},
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Users', UserSchema);