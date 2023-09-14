const express = require('express');
const Router = express.Router();
const User = require('../models/users');
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const secretKey = "qwertuiopqwertyuioiuytrdscvbjk";


//For SignUp

Router.post("/createuser", body('name').isString(), body('email').isEmail(), body('password').isLength({ min: 8 }), async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            location: req.body.location
        })

        return res.json({ success: true });
    } catch (error) {
        console.log(error);
        return res.json({ success: false });
    }
})


//For Login

Router.post("/login", body('email').isEmail(), body('password').isLength({ min: 8 }), async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
        let userData = await User.findOne({email});

        if(!userData)
        {
            return res.status(400).json({ errors: "Enter valid email id" });
        }

        let userPassword = userData.password;

        const passwordComparing = await bcrypt.compare(req.body.password, userPassword);

        if(!passwordComparing)
        {
            return res.status(400).json({ errors: "Enter valid password" });
        }

        const Data = {
            user:{
                id:userData.id
            }
        }

        const authtoken = jwt.sign(Data, secretKey);

        return res.json({ success: true, auth: authtoken });

    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
})

module.exports = Router;