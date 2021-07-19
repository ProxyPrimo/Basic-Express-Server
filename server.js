const express = require("express");

const path = require("path");

const app = express();

const sequelize = require("./util/database");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorRoutes = require("./routes/error");

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

sequelize.sync().then(r => {
    // console.log(r);
    app.listen(3000);
}).catch(e => {
    console.log(e);
});


