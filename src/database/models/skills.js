module.exports = (sequelize, DataTypes) => {
  const Skills = sequelize.define(
    'Skills',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {},
  );
  Skills.associate = (models) => {
    // associations can be defined here
    Skills.belongsToMany(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  return Skills;
};
