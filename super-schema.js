const mongoose = require('mongoose')

module.exports = mongoose.Schema({
    id: {type: String, unique: true, required: true},
    img: String,
    name: String,
    aka: String,
    powers: String,
    weakness: String,
    description: String,
    appearance: String,
    // category: {
    //     type: String,
    //     enum: ['Superhero', 'Villain', 'Magical Beast'],
    //     default: 'Magical Beast'

    // }

})