const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "paul9834",
    DB: "faketwitter",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = dbConfig;
