const routes = require('express').Router();
const router = require('express').Router();


// Route to display Name
// routes.use('/', require("./displayName") );

router.use('/', require('./swagger'));

// Route to display the contacts from DB
routes.use('/contacts', require("./contacts") );


module.exports = routes;
