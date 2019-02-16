const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    //storing a product in the products array
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
}