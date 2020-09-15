module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        "User",
        {
            idUser: {
                type: Sequelize.STRING,
                primaryKey: true
            },
            username: {
                type: Sequelize.STRING,
                unique: true
            },
            published_date: Sequelize.DATE,
        }, {
            tableName: "Users"
        }
    );
    return User;
}