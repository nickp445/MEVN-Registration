/*app.route('/users')
		.get(userList.listAll)
			.post(userList.createUser);

	app.route('/users:userId')
		.get(userList.readUser)
*/



//get the goose

const mongoose = require('mongoose'),
			User = mongoose.model('Users');

exports.listAll = function(req, res) {
	User.find({}, function(err, user) {
		if(err)
			res.send(err);
		res.json(user);
	});
};


exports.createUser = function(req, res) {
	const newUser = new User(req.body);
	newUser.save(function(err, user) {
		if(err)
			res.send(err);
		res.json(user);
	});
};


exports.readUser = function(req, res) {
	User.findOne({id: "_id"}, function(err, user) {
		if(err)
			res.send(err);
		res.json(user);
	});
};