const User = require('./User');
const Character = require('./Character');
const Drive = require('./Drive');
const Background = require('./Background');
const Playbook = require('./Playbook');
const Origin = require('./Origin')

module.exports = { User, Character, Drive, Background, Playbook, Origin };

//User has many Characters
User.hasMany(Character, {
    foreignKey: 'user_id'
})
//Characters belong to User
Character.belongsTo(User, {
    foreignKey: 'user_id'
})

// //Character has one drive
// Character.hasOne(Drive, {
//     foreignKey: 'character_id'
// })

// //Drives belong to many Characters
// Drive.belongsToMany(Character, {
//     foreignKey: 'character_id'
// })

// //Character has one background
// Character.hasOne(Background, {
//     foreignKey: 'character_id'
// })

// //Backgrounds belong to many Characters
// Background.belongsToMany(Character, {
//     foreignKey: 'character_id'
// })

module.exports = { User, Character, Drive, Background, Playbook, Origin };