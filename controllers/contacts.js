const mongodb = require('../db/connect'); // requires functions from db/connect
const ObjectId = require('mongodb').ObjectId; // Requieres the ID 


// Function that allows to get the collection "CONTACTS"
const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db("Collections").collection('Contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};
// Function that allows to get one item of the  collection "CONTACTS" by ID 
const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("Collections")
    .collection('Contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

// With the request, structure the request and insert a new contact. 
const addNewContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthDate: req.body.birthDate,
  };
  // Inserting in DB New Contact
  const response = await mongodb
    .getDb()
    .db("Collections")
    .collection('Contacts')
    .insertOne(contact);

  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || "Some error occurred while creating the contact");
  }
}

const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id); // Get the id specified in the url parameter
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthDate: req.body.birthDate
  };
  const response = await mongodb
    .getDb()
    .db("Collections")
    .collection('Contacts')
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};

const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await 
  mongodb.getDb()
  .db("Collections")
  .collection('Contacts')
  .deleteOne({ _id: userId });

  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};




module.exports = { getAll, getSingle, addNewContact, updateContact, deleteContact };