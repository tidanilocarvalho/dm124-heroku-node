const mongoose = require('mongoose');
	const Schema = mongoose.Schema;
	const userSchema = new Schema({
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		role: {
			type: String,
			required: true
		},
		creationDate: { type: Date },
		modifiedDate: { type: Date }
	});
module.exports = mongoose.model('User', userSchema);