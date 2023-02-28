// =================== General Info ==== ====== //
// Node module: for packages or frameworks config, the same with package-lock.json 

require('dotenv').config();


const express = require('express'); // Calling Express Fram Work 
const bodyParser = require('body-parser'); // BodyParser to manage parts
const mongodb = require('./db/connect'); // MongoDb Connection 

const port = process.env.PORT || 8080;
const app = express();


app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-key'); 
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    })
    .use('/', require('./routes'));


mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}:  http://localhost:${port} `);
        
    }
});
