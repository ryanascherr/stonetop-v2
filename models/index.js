const User = require('./User');
const Character = require('./Character');

module.exports = { User, Character };

//User has many Characters
User.hasMany(Character, {
    foreignKey: 'user_id'
})
//Characters belong to User
Character.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Character };