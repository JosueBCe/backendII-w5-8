// Call Express to Use 
const express = require('express');
const router = express.Router();

// Requires specific file 
const contactsController = require('../controllers/contacts');

// Call getAll Functions to get all contacts
router.get('/', contactsController.getAll);

// Call getSingle function to get single contact when searched by id
router.get('/:id', contactsController.getSingle);

module.exports = router;