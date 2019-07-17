'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    cardid: DataTypes.STRING,
    imageuripng: DataTypes.STRING,
    color: DataTypes.STRING,
    artist: DataTypes.STRING,
    cmc: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    rarity: DataTypes.STRING,
    power: DataTypes.STRING,
    colorindicator: DataTypes.STRING,
    coloridentity: DataTypes.STRING,
    multiverseid: DataTypes.INTEGER
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};