"use strict";

module.exports = (sequelize, DataTypes) => {
  const AreaOfInterests = sequelize.define('AreaOfInterests', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  AreaOfInterests.associate = models => {
    // associations can be defined here
    AreaOfInterests.belongsToMany(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };

  return AreaOfInterests;
};