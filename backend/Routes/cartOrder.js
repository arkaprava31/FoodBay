const express = require('express');
const Router = express.Router();
const orders = require("../models/Orders");

Router.post('/cartdata', async (req, res) => {
    let data = req.body.order_data;

    let emailId = await orders.findOne({ email: req.body.email });

    if (emailId === null) {
        try {
            const order = new orders({
                email: req.body.email,
                order: [data]
            });
            await order.save().then(()=>{
                res.json({ success: true });
            })

            // await orders.create({
            //     email: req.body.email,
            //     order: [data]
            // }).then(() => {
            //     res.json({ success: true });
            // })

        } catch (error) {
            console.log(error.message);
            res.send("Server Error")
        }
    } else {
        try {
            await orders.findOneAndUpdate({ 'email': req.body.email },
                {
                    $push: { order: data }
                }).then(() => {
                    res.json({ success: true });
                })
        } catch (error) {
            console.log(error.message);
            res.send("Server Error")
        }

    }
})

module.exports = Router;