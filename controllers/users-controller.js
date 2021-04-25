const userDao = require("../daos/users-dao")

module.exports = (app) => {
    const register = (req, res) => {
        const credentials = req.body;
        userDao.findUserByUsername(credentials.username)
            .then((actualUser) => {
                if(actualUser.length > 0) {
                    res.send("0")
                } else {
                    userDao.createUser(credentials)
                        .then((newUser) => {
                            res.send(newUser)
                        })
                }
            })
    }

    const login = (req, res) => {
        const credentials = req.body;
        userDao.findUserByCredentials(credentials)
            .then((actualUser) => {
                if(actualUser) {
                    res.send(actualUser)
                } else {
                    res.send("0")
                }
            })
    }

    const updateUser = (req, res) => {
        const credentials = req.body;
        userDao.updateUser(credentials).then((updatedUser) => {
            res.send(updatedUser);
        })
    }

    const getProfileData = (req, res) => {
        const profileUsername = req.params['username'];
        userDao.findUserByUsername(profileUsername)
            .then((actualUser) => {
                if(actualUser) {
                    res.send(actualUser)
                } else {
                    res.send("0")
                }
            })
    }

    const getAllUsers = (req, res) => {
        userDao.findAllUsers().then((users) => {
            res.send(users);
        })
    }

    app.get("/api/users", getAllUsers);
    app.put("/api/users/update", updateUser);
    app.get("/api/users/:username", getProfileData);
    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
}