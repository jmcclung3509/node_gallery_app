
const express = require ('express');
const router = express.Router();
const req = require('express/lib/request');
const { acceptsEncodings } = require('express/lib/request');
const dao = require('../db/dao')




router.get('/', async (req, res) => {
    try {
        const response = await dao.getArt({})
        console.log("art working")
    res.send({ data: response });
    } catch (error) {
        res.send({error: error.message})
    }
})

// router.get('/search', async (req, res) => {
//     const data = await Art.find({
//         $or: [
//             { title: { '$regex': req.query.dsearch } },
//             { description: { '$regex': req.query.dsearch } },
//             { createdBy: { '$regex': req.query.dsearch } },
//             { date: { '$regex': req.query.dsearch } },
//         ]
//     })
//     console.log(data)
//     res.render('search', { data });
// })

// router.post('/search', async (req, res) => {
//     res.redirect('/search?dsearch=' + req.body.dsearch);
// });

router.get('/delete/:id', async (req, res) => {
    try {
        const id = req.params['id'];
        const res = await dao.deleteArt(id)
        res.send('/art');
    }catch(error){
        res.send({error: error.message})
    }
})

router.get('/edit/:id', async (req, res) => {
    try {
        const id = req.params['id'];
     const data = await dao.findOne(id) 
    res.send('edit-page', {
        data,
    });
}catch(error){
    res.send({error: error.message})
}
})

router.post('/edit-page/:id', async (req, res) => {
    try {
        const id = req.params['id'];
        const payload = req.body;
     await dao.updateArt(id, payload)
    res.send('/art');
}catch(error){
    res.send({error: error.message})
}
});

router.get('/add-page', (req, res) => {
  res.render("add-page");
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const response = await dao.addArt(req.body)
        res.send(response);
    } catch (error) {
        console.log(error)
        res.send({error: error.message})
    }
})
module.exports = router