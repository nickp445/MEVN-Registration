const express = require('express'),
			app = express(),
			port = 3100,
			mongoose = require('mongoose'),
			User = require('./api/models/userModel'),
			bodyParser = require('body-parser'),
			cors = require('cors');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://Nickp445:argusk0s@ds115971.mlab.com:15971/vue_reg');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const routes = require('./api/routes/userRoutes');
routes(app);




app.listen(process.env.PORT || port, () => {
	console.log('Running');
});