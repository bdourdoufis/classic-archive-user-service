const mongoose = require('mongoose')
const favoritesSchema = mongoose.Schema({
    username: String,
    itemId: Number,
    itemName: String,
}, {collection: 'favorites'})
module.exports = favoritesSchema