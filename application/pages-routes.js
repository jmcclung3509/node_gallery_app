const express = require ('express');
const Super = require("../super-module")
const router = express.Router();
const {v4: uuidv4} = require("uuid");
const req = require('express/lib/request');
const { acceptsEncodings } = require('express/lib/request');




router.get('/', async (req, res) => {
    try {
        console.log("super working")
    const response = await Super.find({})
    res.send({ data: response });
    // res.json(data)
    } catch (error) {
        res.send({error: error.message})
    }

})
router.get('/search', async (req, res) => {

    const data = await Super.find({
        $or: [
            { name: { '$regex': req.query.dsearch } },
            { description: { '$regex': req.query.dsearch } },
            { powers: { '$regex': req.query.dsearch } },
            { weakness: { '$regex': req.query.dsearch } },
            { category: { '$regex': req.query.dsearch } },
            { appearance: { '$regex': req.query.dsearch } },
            { description: { '$regex': req.query.dsearch } },
            { aka: { '$regex': req.query.dsearch } }
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
    let response = await Super.deleteOne({ id })
    // req.flash("success", 'Record deleted');
    res.send('/super');

})
router.get('/edit/:id', async (req, res) => {
    const id = req.params['id'];
    const data = await Super.findOne({ id });

    res.send('edit-page', {
        data,
    });


})
router.post('/edit-page/:id', async (req, res) => {
    const id = req.params['id'];
    const payload = req.body;
    const response = await Super.updateOne({ id }, payload);
    // res.send(payload)
    res.send('/super');


});
router.get('/add-page', (req, res) => {
    res.send({data:response})
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