const express = require('express');
const Router = express.Router();

Router.post('/data', async(req, res)=>{
    try {
        res.send([global.foodItems, global.foodCategory]);
    } catch (error) {
        console.error(error);
        res.send("Error!!!");
    }
})

module.exports = Router;