const mongoose = require('mongoose')
const favoritesSchema = require('./favorites-schema')
const favoritesModel = mongoose.model(
    'FavoriteModel',
    favoritesSchema
)
module.exports = favoritesModel