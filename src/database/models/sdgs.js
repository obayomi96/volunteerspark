module.exports = (sequelize, DataTypes) => {
  const Sdgs = sequelize.define(
    'Sdgs',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {},
  );
  Sdgs.associate = (models) => {
    // associations can be defined here
    Sdgs.belongsToMany(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  return Sdgs;
};
