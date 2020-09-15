module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define(
        "Post",
        {
            idPost: {
                type: Sequelize.STRING,
                primaryKey: true
            },
            message: Sequelize.STRING,
            published_date: Sequelize.DATE,
        }, {
            tableName: "posts"
        }
    );
    return Post;
}