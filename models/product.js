const fs = require("fs");
const path = require("path");

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
        products[existingProductIndex] = this;
      } else {
        products.push(this);
      }
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static delete(id) {
    getProductsFromFile((products) => {
      if (id) {
        const existingProductIndex = products.findIndex(
          (p) => p.id === this.id
        );
        products.splice(products.indexOf(existingProductIndex), 1);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    })
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
