const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('hello world')
})

const port = process.env.PORT || '5000'
app.listen(port, (err) => {
    if (err){
        throw Error(err);
    }
    console.log(`server is active on port ${port}`);  
})
