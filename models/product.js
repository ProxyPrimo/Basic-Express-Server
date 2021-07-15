const fs = require("fs");
const path = require("path");

const Cart = require("./cart");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    return cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.id = Math.random().toString();
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save(id) {
    getProductsFromFile((products) => {
      if (id) {
        this.id = id;
        const existingProductIndex = products.findIndex(
          (p) => p.id === this.id
        );
        console.log(existingProductIndex, id);
        products[existingProductIndex] = this;
      } else {
        products.push(this);
      }
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static deleteById(id) {
    getProductsFromFile((products) => {
      if (id) {
        const product = products.find(prod => prod.id === id);
        const updatedProducts = products.filter((p) => p.id !== id);
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          if (!err) {
            Cart.deleteProduct(id, product.price);
          }
        });
      }
    });
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static getProductById(id, cb) {
    getProductsFromFile((products) => {
      cb(products.find((p) => p.id === id));
    });
  }
};
