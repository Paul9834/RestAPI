

// Import Sequelize
const Sequelize = require("sequelize");
const sequelizeConnection = require ("./connection");


// Import Models
const UserModel = require ("../models/user-model");
const PostModel = require ("../models/post-model");

const User = UserModel(sequelizeConnection, Sequelize);
const Post = PostModel(sequelizeConnection, Sequelize);


// Create Relation

User.hasMany(Post, {foreignKey:'idPost', sourceKey:'idUser'});
Post.belongsTo(User, {foreignKey:'idUser', sourceKey:'idPost'});

const db = {
    User,
    Post,
    sequelizeConnection
}

module.exports = db