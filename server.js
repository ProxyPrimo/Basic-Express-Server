// Adding express
const express = require("express");

const path = require("path");

const app = express();

// Database configurations
const sequelize = require("./util/database");

const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

// View Engine
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Auto-generated User
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((e) => {
      console.log(e);
    });
});

// Routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorRoutes = require("./routes/error");

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

// Association
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product); // optional

User.hasOne(Cart);
Cart.belongsTo(User); // optional

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
  // .sync({force: true})
  .sync()
  .then((r) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      User.create({
        name: "Peter",
        email: "peter@peter.com",
      });
    }
    return Promise.resolve(user);
  })
  .then((user) => {
    console.log(user);
    app.listen(3000);
  })
  .catch((e) => {
    console.log(e);
  });
