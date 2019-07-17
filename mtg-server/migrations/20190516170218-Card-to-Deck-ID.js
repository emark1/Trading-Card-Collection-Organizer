'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
    'Cards',
    'deckId',
    {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Decks",
        key: "id"
      }
    }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Cards',
      'deckId'
    )
  }
};
