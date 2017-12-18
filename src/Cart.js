class Cart {
  constructor() {
    this.cart = {};
  }
  addProduct (productCode, quantity) {
    this.cart[productCode] =
      this.cart[productCode] == undefined ? quantity :
        this.cart[productCode] + quantity;

    return this.cart;
  }

  removeProduct (productCode) {
    if (this.cart[productCode] != undefined) {
      delete this.cart[productCode];
    }

    return this.cart;
  }

  showCart () {
    let returnedString = '';

    for (const key in this.cart) {
      returnedString =
        `${returnedString}${key} (${this.cart[key]})\n`;
    }

    return returnedString.replace(/\n$/, "");
  }
}

export default Cart;