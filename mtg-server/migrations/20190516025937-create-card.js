'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cardid: {
        type: Sequelize.STRING
      },
      imageuripng: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      artist: {
        type: Sequelize.STRING
      },
      cmc: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      rarity: {
        type: Sequelize.STRING
      },
      power: {
        type: Sequelize.STRING
      },
      colorindicator: {
        type: Sequelize.STRING
      },
      coloridentity: {
        type: Sequelize.STRING
      },
      multiverseid: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cards');
  }
};