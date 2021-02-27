'use strict';

import bcrypt from 'bcrypt';
// import faker from 'faker';

const saltRounds = 10;

const password = bcrypt.hashSync('password123', saltRounds);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', 
    [
      {
        firstname: 'Zira',
        lastname: 'Jauni',
        email: 'yeladzirajauni@gmail.com',
        phonenumber: '123456789',
        password,
        role: 'admin',
        isActive: true,
        bio: 'zee',
        country: 'Nigeria',
        state: 'Lagos',
        city: 'lekki',
        profession: 'bachelor',
        duration: 'project manager',
        startDate: '20-11-2019',
        endDate: '20-11-2022',
        highestLevelOfEducation: 'masters',
        organizationName: 'volunteerspark',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
      firstname: 'martins',
      lastname: 'obayomi',
      email: 'martinsoluwaseun47@gmail.com',
      phonenumber: '123456789',
      password,
      role: 'super_admin',
      isActive: true,
      bio: 'tech guy',
      country: 'Nigeria',
      state: 'Lagos',
      city: 'yaba',
      profession: 'dev',
      duration: 'days',
      startDate: '20-11-2019',
      endDate: '20-11-2022',
      highestLevelOfEducation: 'secondary',
      organizationName: 'freelance',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },
      {
      firstname: 'Rume',
      lastname: 'Efeduma',
      email: 'rume.feduma@gmail.com',
      phonenumber: '123456789',
      country: 'Nigeria',
      state: 'Lagos',
      city: 'Ikeja',
      password,
      role: 'super_admin',
      isActive: true,
      bio: 'Business guy',
      profession: 'operations',
      duration: 'days',
      startDate: '20-11-2019',
      endDate: '20-11-2022',
      highestLevelOfEducation: 'masters',
      organizationName: 'volunteerspark',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
