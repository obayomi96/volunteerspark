/* eslint-disable no-param-reassign */

import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      middlename: DataTypes.STRING,
      email: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      role: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
      isVerified: DataTypes.BOOLEAN,
      password: DataTypes.STRING,
      profilephoto: DataTypes.STRING,
      headerphoto: DataTypes.STRING,
      bio: DataTypes.STRING,
      profession: DataTypes.STRING,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      type: DataTypes.STRING,
      highestLevelOfEducation: DataTypes.ENUM(
        'primary',
        'secondary',
        'ond',
        'bachelor',
        'masters',
        'phd',
      ),
      availabilityType: DataTypes.ENUM('full-time', 'part-time'),
      availabilityHoursOrWeeks: DataTypes.INTEGER,
      availabilityDays: DataTypes.ENUM(
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
      ),
      organizationName: DataTypes.STRING,
      project: DataTypes.STRING,
      areaOfInterestId: DataTypes.INTEGER,
      sdgId: DataTypes.INTEGER,
      skillId: DataTypes.INTEGER,
      descriptionOfResponsibilities: DataTypes.STRING,
      currentPosition: DataTypes.STRING,
      startDate: DataTypes.STRING,
      endDate: DataTypes.STRING,
      duration: DataTypes.STRING,
      website: DataTypes.STRING,
      linkedinUrl: DataTypes.STRING,
      instagramUrl: DataTypes.STRING,
      twitterUrl: DataTypes.STRING,
    },
    {},
  );

  User.associate = ({ Role, Errand, Notification }) => {
    // User.belongsTo(Role, { as: 'role', foreignKey: 'roleId' });
    User.hasMany(sdgs, { as: 'sdgs', foreignKey: 'sdgId' });
    User.hasMany(skills, { as: 'skills', foreignKey: 'skillId' });
    User.hasMany(areaOfInterests, {
      as: 'areaOfInterests',
      foreignKey: 'areaOfInterestId',
    });
  };

  User.beforeCreate(async (user) => {
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    user.password = hashedPassword;
  });
  return User;
};
