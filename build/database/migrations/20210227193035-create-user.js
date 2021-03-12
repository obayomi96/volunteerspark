'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      middlename: {
        type: Sequelize.STRING,
        allowNull: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profilephoto: {
        type: Sequelize.STRING,
        allowNull: true
      },
      headerphoto: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      profession: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phonenumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING
      },
      highestLevelOfEducation: {
        type: Sequelize.ENUM('primary', 'secondary', 'ond', 'bachelor', 'masters', 'phd'),
        allowNull: false
      },
      availabilityType: {
        type: Sequelize.ENUM('full-time', 'part-time'),
        allowNull: true
      },
      availabilityHoursOrWeeks: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      availabilityDays: {
        type: Sequelize.ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday'),
        allowNull: true
      },
      organizationName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      project: {
        type: Sequelize.STRING,
        allowNull: true
      },
      areasOfInterestId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      sdgId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      skillId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      descriptionOfResponsibilities: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      currentPosition: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      startDate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endDate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      duration: {
        type: Sequelize.STRING,
        allowNull: false
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true
      },
      linkedinUrl: {
        type: Sequelize.STRING,
        allowNull: true
      },
      instagramUrl: {
        type: Sequelize.STRING,
        allowNull: true
      },
      twitterUrl: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};