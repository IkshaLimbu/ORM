const {DataTypes}= require('sequelize');
const sequelize = require('../config/db');

const Suzuki = sequelize.define('Suzuki', {
    plateNum : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    releaseDate : {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Suzuki;