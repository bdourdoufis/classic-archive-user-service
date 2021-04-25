const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
    username: String,
    password: String,
    faction: {type: String, enum: ['Alliance', 'Horde']},
    favoriteClass: {type: String, enum: ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Druid']},
}, {collection: 'users'})
module.exports = usersSchema