const express = require ('express');
const Art = require("../art-module")
const router = express.Router();
const {v4: uuidv4} = require("uuid");
const req = require('express/lib/request');
const { acceptsEncodings } = require('express/lib/request');




router.get('/', async (req, res) => {
    try {
        console.log("art working")
    const response = await Art.find({})
    res.send({ data: response });
    // res.json(data)
    } catch (error) {
        res.send({error: error.message})
    }

})
router.get('/search', async (req, res) => {

    const data = await Art.find({
        $or: [
            { title: { '$regex': req.query.dsearch } },
            { description: { '$regex': req.query.dsearch } },
            { createdBy: { '$regex': req.query.dsearch } },
            { date: { '$regex': req.query.dsearch } },
           
   
        ]
    })
    console.log(data)

    res.render('search', { data });
})
router.post('/search', async (req, res) => {

    res.redirect('/search?dsearch=' + req.body.dsearch);
});

router.get('/delete/:id', async (req, res) => {
    const id = req.params['id'];
    let response = await Art.deleteOne({ id })
    // req.flash("success", 'Record deleted');
    res.send('/art');

})
router.get('/edit/:id', async (req, res) => {
    const id = req.params['id'];
    const data = await Art.findOne({ id });

    res.send('edit-page', {
        data,
    });


})
router.post('/edit-page/:id', async (req, res) => {
    const id = req.params['id'];
    const payload = req.body;
    const response = await Art.updateOne({ id }, payload);
    // res.send(payload)
    res.send('/art');


});
router.get('/add-page', (req, res) => {
    res.send({data:response})
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body)

        const newArt= new Art({ ...req.body, id: uuidv4() })
        const response = await newArt.save();
  
        res.send({data: response});
    } catch (error) {

        res.send({error: error.message})


    }
})
module.exports = router