module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define(
        "Post",
        {
            idPost: {
                type: Sequelize.STRING,
                primaryKey: true
            },
            post: {
                type: Sequelize.STRING,
                unique: true
            },
            published_date: Sequelize.DATE,
        }, {
            tableName: "posts"
        }
    );
    return Post;
}