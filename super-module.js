const mongoose = require('mongoose')
const superSchema = require("./super-schema")

module.exports = mongoose.model('Super', superSchema)