// Adding express
const express = require("express");

const path = require("path");

const app = express();

// Database configurations
const mongoConnect = require("./util/database");

// const Product = require("./models/product");
// const User = require("./models/user");

// const Cart = require("./models/cart");
// const CartItem = require("./models/cart-item");

// const Order = require("./models/order");
// const OrderItem = require("./models/order-item");

// View Engine
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Auto-generated User
app.use((req, res, next) => {

});


// Routes
// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
// const errorRoutes = require("./routes/error");

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);
// app.use(errorRoutes);

mongoConnect(client => {
    console.log(client);
    app.listen(3000);
});