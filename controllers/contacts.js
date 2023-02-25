const mongodb = require('../db/connect'); // requires functions from db/connect
const ObjectId = require('mongodb').ObjectId; // Requieres the ID 


// Function that allows to get the collection "CONTACTS"
const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db("team").collection('team').find();
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
    .db()
    .collection('team')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAll, getSingle };