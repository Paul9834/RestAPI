const dbConfig = require("./db-config");

const Sequelize = require("sequelize");

const sequielizeConnection = new Sequelize (
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        HOST: "localhost",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

module.exports = sequielizeConnection;

