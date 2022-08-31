const express = require('express')
const router = express.Router();

router.get('/', (req, res)=> {
console.log("hello world")
res.redirect('./super')
})
module.exports = router