const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res) => {
  Product.findAll().then(products => {
    res.render("shop/product-list", {
      products: products,
      pageTitle: "All Products",
      path: "/product-list",
    });
  }).catch(e => {
    console.log(e);
  });
};

exports.getProductById = (req, res) => {
  // An alternative way to retrieve the product with a specific id
  // Product.findAll({where: {id: req.params.productId}});
  // However, this returns an array of products
  
  Product.findByPk(req.params.productId)
    .then((product) => {
      res.render("shop/product-details", {
        product: product,
        pageTitle: product.title,
        path: "/product",
      });
    })
    .catch((e) => console.log(e));
};

exports.getIndex = (req, res) => {
  Product.findAll().then(products => {
    res.render("shop/index", {
      products: products,
      pageTitle: "Shop",
      path: "/",
    });
  }).catch(e => {
    console.log(e);
  });
};

exports.getCart = (req, res) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render("shop/cart", {
        pageTitle: "Your Cart",
        path: "/cart",
        products: cartProducts,
      });
    });
  });
};

exports.postCart = (req, res) => {
  const productId = req.body.productId;
  Product.getProductById(productId, (product) => {
    Cart.addProduct(productId, product.price);
  });
  res.redirect("/cart");
};

exports.getOrders = (req, res) => {
  res.render("shop/orders", {
    pageTitle: "Your Orders",
    path: "/orders",
  });
};

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

exports.postCartDeleteProduct = (req, res) => {
  const productId = req.body.productId;
  Product.getProductById(productId, (product) => {
    Cart.deleteProduct(productId, product.price);
    res.redirect("/cart");
  });
};
