module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
  });

  return Post;
};
