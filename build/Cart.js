"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart = function () {
  function Cart() {
    _classCallCheck(this, Cart);

    this.cart = {};
  }

  _createClass(Cart, [{
    key: "addProduct",
    value: function addProduct(productCode, quantity) {
      this.cart[productCode] = this.cart[productCode] == undefined ? quantity : this.cart[productCode] + quantity;

      return this.cart;
    }
  }, {
    key: "removeProduct",
    value: function removeProduct(productCode) {
      if (this.cart[productCode] != undefined) {
        delete this.cart[productCode];
      }

      return this.cart;
    }
  }, {
    key: "showCart",
    value: function showCart() {
      var returnedString = '';

      for (var key in this.cart) {
        returnedString = "" + returnedString + key + " (" + this.cart[key] + ")\n";
      }

      return returnedString.replace(/\n$/, "");
    }
  }]);

  return Cart;
}();

exports.default = Cart;