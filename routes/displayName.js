const express = require('express');
const router = express.Router();

// Requires specific file 
const nameController = require('../controllers/index');

// Requires specific function from index file 
router.get('/', nameController.displayName);


module.exports = router;