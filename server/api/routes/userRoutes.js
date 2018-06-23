module.exports = function(app) {
	const userList = require('../controllers/userController');

	app.route('/users')
		.get(userList.listAll)
			.post(userList.createUser);

	app.route('/users:userId')
		.get(userList.readUser)
}