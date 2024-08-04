const { Sequelize, Model } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    process.env.DATABASE,
    {
        host: process.env.DATABASE_HOST,
        dialect: 'mysql',
    },
);

sequelize.authenticate().then(() => {
    console.log("The database connect successfully");
}).catch((err) => {
    console.log("There was an error while connecting to db ", err);
})

module.exports = sequelize;