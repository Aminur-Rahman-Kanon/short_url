const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.get('/:item', async (req, res) => {
    const { item } = req.params;
    await fetch('https://boxdelabonita.com/api/fetch-all-products')
    .then(jsn => jsn.json())
    .then(result => console.log(result, item))
    .catch(err => console.log(err))
})

const port = process.env.PORT || '5000'
app.listen(port, (err) => {
    if (err){
        throw Error(err);
    }
    console.log(`server is active on port ${port}`);  
})
