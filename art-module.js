const mongoose = require('mongoose')
const artSchema = require("./art-schema")

module.exports = mongoose.model('Art', artSchema)