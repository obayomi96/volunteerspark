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
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      middlename: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      profilephoto: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      headerphoto: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      profession: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phonenumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING
      },
      highestLevelOfEducation: {
        type: Sequelize.ENUM(
          'primary',
          'secondary',
          'ond',
          'bachelor',
          'masters',
          'phd',
        ),
        allowNull: false,
      },
      availabilityType: {
        type: Sequelize.ENUM(
          'full-time',
          'part-time'
        ),
        allowNull: true,
      },
      availabilityHoursOrWeeks: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      availabilityDays: {
        type: Sequelize.ENUM(
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
        ),
        allowNull: true,
      },
      organizationName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      project: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      impactAreasOfInterest: {
        type: Sequelize.ENUM(
          'charity',
          'arts-and-culture',
          'religion',
          'education-and-literacy',
          'environment',
          'computers-and-technology',
          'people-rehabilitation',
          'career-development',
          'music',
          'senior-citizens',
          'mental-health',
          'advocacy-and-human-rights',
          'animals',
          'children-youth',
          'community',
          'health-medicine',
          'seniors-elderly',
          'board-development',
          'crisis-support',
          'disaster-relief',
          'emergency-safety',
          'homeless-housing',
          'hunger',
          'immigrants-and-refugees',
          'international',
          'justice-and-legal',
          'media-broadcasting',
          'people-with-disabilities',
          'sports-and-recreation',
          'women',
          'politics',
          'race-and-ethnicity',
          'military-veterans-support',
          'covid',
        ),
        allowNull: true,
      },
      sdgs: {
        type: Sequelize.ENUM(
          'no-poverty',
          'zero-hunger',
          'good-health-and-well-being',
          'quality-education',
          'gender-equality',
          'clean-water-and-sanitation',
          'affordable-clean-energy',
          'decent-work-and-economic-growth',
          'industry-innovation-and-infrastructure',
          'reduced-inequality',
          'sustainable-cities-and-communities',
          'responsible-consumption-and-production',
          'climate-action',
          'life-below-water',
          'life-on-land',
          'peace-and-justice-strong-institutions',
          'partnerships-to-achieve-the-goal',
        ),
        allowNull: true,
      },
      skills: {
        type: Sequelize.ENUM(
          'engineering',
          'information-technology',
          'social-development',
          'music',
          'finance',
          'economics',
          'people'
        ),
        allowNull: true,
      },
      descriptionOfResponsibilities: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      currentPosition: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      startDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      duration: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      linkedinUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      instagramUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      twitterUrl: {
        type: Sequelize.STRING,
        allowNull: true,
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