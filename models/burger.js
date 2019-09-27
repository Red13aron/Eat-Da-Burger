module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
    });
    return Burger;
  };