'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'James',
        lastName: 'K',
        username: 'DeeRose',
        email: 'jj@gmail.com',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Lee',
        lastName: 'Lou',
        username: 'ReedRose',
        email: 'bb@gmail.com',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        firstName: 'Gee',
        lastName: 'Dee',
        username: 'BeeRose',
        email: 'cc@user.io',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        firstName: 'Gee',
        lastName: 'Dee',
        email: 'qq@user.io',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Demo',
        lastName: 'User',
        email: 'demo@demo.na',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'demo@user.io',
        username: 'Demo',
        firstName: 'Demo',
        lastName: 'User',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        firstName: 'Gee',
        lastName: 'Dee',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        firstName: 'Gee',
        lastName: 'Dee',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
