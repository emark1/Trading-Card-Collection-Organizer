'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Decks',
      'userId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Users",
          key: "id"
        }
      }
      )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Decks',
      'userId'
    )
  }
};
