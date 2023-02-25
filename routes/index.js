const routes = require('express').Router();

// Route to display Name
routes.use('/', require("./displayName") );

// Route to display the contacts from DB
routes.use('/contacts', require("./contacts") );



module.exports = routes;
