// =================== General Info ==== ====== //
// Node module: for packages or frameworks config, the same with package-lock.json 


const express = require('express'); // Calling Express Fram Work 
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})