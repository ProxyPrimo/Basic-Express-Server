const Sequelize = require("sequelize"); // It's with a capital letter because we're importing a constructor.

module.exports = new Sequelize("product_shop", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});
