const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.get('/:item', async (req, res) => {
    const { item } = req.params;
    if (!item) return res.status(400).json({ message:'invalid request' });
    await fetch('https://boxdelabonita.com/api/fetch-all-products')
    .then(jsn => jsn.json())
    .then(result => {
        if (!result.data) return res.status(500).json({ message: 'server error' });
        const filteredItem = result.data.filter(itm => itm.title === item)[0];
        if (filteredItem){
            return res.redirect(`https://boxdelabonita.com/bag/${filteredItem.category}/${item}`);
        }
    })
    .catch(err => res.status(500).json({ message: err }));
})

const port = process.env.PORT || '5000'
app.listen(port, (err) => {
    if (err){
        throw Error(err);
    }
    console.log(`server is active on port ${port}`);  
})
