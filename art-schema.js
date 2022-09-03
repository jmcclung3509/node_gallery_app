const mongoose = require('mongoose')

module.exports = mongoose.Schema({
  
    id: {type: String, unique: true, required: true},
    formFile: String,
    title: String,
    createdBy: String,
    description: String,
    date: Date,
})