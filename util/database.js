const {Sequelize} = require("sequelize"); // It's with a capital letter because we're importing a constructor.

const sequelize = new Sequelize("product_shop", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
