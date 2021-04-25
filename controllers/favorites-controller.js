const favoriteDao = require("../daos/favorites-dao")

module.exports = (app) => {
    const createFavorite = (req, res) => {
        const favInfo = req.body;
        favoriteDao.createFavorite(favInfo)
            .then((attempt) => {
                res.send(attempt);
            })
    }

    const removeFavorite = (req, res) => {
        const data = req.body;
        favoriteDao.removeFavorite(data)
            .then((removed) => {
                res.send(removed);
            })
    }

    const getUserFavorites = (req, res) => {
        const username = req.params['username'];
        favoriteDao.findFavoritesForUser(username)
            .then((favorites) => {
                res.send(favorites);
            })
    }

    const getItemFavorites = (req, res) => {
        const itemId = req.params['itemid'];
        favoriteDao.findItemFavorites(itemId)
            .then((favorites) => {
                res.send(favorites);
            })
    }

    app.delete("/api/favorites/delete", removeFavorite);
    app.post("/api/favorites/create", createFavorite);
    app.get("/api/favorites/user/:username", getUserFavorites);
    app.get("/api/favorites/item/:itemid", getItemFavorites);
}