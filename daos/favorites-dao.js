const favoritesModel = require('../models/favorites/favorites-model')

const findFavoritesForUser = (username) => {
    return favoritesModel.find({username: username});
}
const findItemFavorites = (itemId) => {
    return favoritesModel.find({itemId: itemId});
}
const createFavorite = (info) => favoritesModel.create({username: info.username, itemId: info.itemId, itemName: info.itemName})

const removeFavorite = (data) => favoritesModel.findOneAndDelete({username: data.username, itemId: data.itemId})

module.exports = { findFavoritesForUser, findItemFavorites, createFavorite, removeFavorite }