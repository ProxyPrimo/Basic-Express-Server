const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;

  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
  })
    .then((r) => {
      console.log("Created a Product");
    })
    .catch((e) => console.log(e));
};

exports.getEditProduct = (req, res) => {
  const editMode = req.query.edit;

  if (!editMode) {
    return res.redirect("/");
  }

  const productId = req.params.productId;
  Product.findByPk(productId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }

      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((e) => console.log(e));
};

exports.postEditProduct = (req, res) => {
  Product.findByPk(req.body.productId)
    .then((product) => {
      product.title = req.body.title;
      product.price = req.body.price;
      product.imageUrl = req.body.imageUrl;
      product.description = req.body.description;

      product.save();
      
      res.redirect("/admin/products");
    })
    .catch((e) => console.log(e));
};

exports.postDeleteProduct = (req, res) => {
  const productId = req.params.productId;
  Product.deleteById(productId);
  res.redirect("/admin/products");
};

exports.getProducts = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.render("admin/products", {
        products: products,
        pageTitle: "Admin Products",
        path: "/admin/product-list",
      });
    })
    .catch((e) => console.log(e));
};
