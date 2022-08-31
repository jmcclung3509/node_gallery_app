const express = require ('express');
const Super = require("../super-module")
const router = express.Router();
const {v4: uuidv4} = require("uuid");
// const req = require('express/lib/request');
// const { acceptsEncodings } = require('express/lib/request');




router.get('/', async (req, res) => {
    try {
        console.log("super working")
    const response = await Super.find({})
    res.send({ data: response });
    } catch (error) {
        res.send({error: error.message})
    }

})

router.post('/', async (req, res) => {
    try {
        console.log(req.body)

        const newSuper = new Super({ ...req.body, id: uuidv4() })
        const response = await newSuper.save();
  
        res.send({data: response});
    } catch (error) {

        res.send({error: error.message})


    }
})
module.exports = router