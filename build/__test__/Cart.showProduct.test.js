"use strict";

var _Cart = require("../Cart");

var _Cart2 = _interopRequireDefault(_Cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("\nlet cart = new Cart();\ncart.addProduct(\"Baju Merah Mantap\", 1);\ncart.addProduct(\"Baju Merah Mantap\", 1);\ncart.addProduct(\"Bukuku\", 3);\ncart.removeProduct(\"Bukuku\");\ncart.addProduct(\"Singlet Hijau\", 1);\ncart.removeProduct(\"ProdukBohongan\");\nexpect(cart.showCart()).toEqual(\n  'Baju Merah Mantap (2)\nSinglet Hijau (1)'\n);\n  ", function () {
  var cart = new _Cart2.default();
  cart.addProduct("Baju Merah Mantap", 1);
  cart.addProduct("Baju Merah Mantap", 1);
  cart.addProduct("Bukuku", 3);
  cart.removeProduct("Bukuku");
  cart.addProduct("Singlet Hijau", 1);
  cart.removeProduct("ProdukBohongan");
  expect(cart.showCart()).toEqual('Baju Merah Mantap (2)\nSinglet Hijau (1)');
});

test("\nlet cart = new Cart();\ncart.addProduct(\"Singlet Hijau\", 1);\ncart.addProduct(\"Baju Merah Mantap\", 1);\ncart.addProduct(\"Baju Merah Mantap\", 1);\ncart.addProduct(\"Bukuku\", 3);\ncart.removeProduct(\"Bukuku\");\ncart.removeProduct(\"ProdukBohongan\");\nexpect(cart.showCart()).toEqual(\n  'Singlet Hijau (1)\nBaju Merah Mantap (2)'\n);\n  ", function () {
  var cart = new _Cart2.default();
  cart.addProduct("Singlet Hijau", 1);
  cart.addProduct("Baju Merah Mantap", 1);
  cart.addProduct("Baju Merah Mantap", 1);
  cart.addProduct("Bukuku", 3);
  cart.removeProduct("Bukuku");
  cart.removeProduct("ProdukBohongan");
  expect(cart.showCart()).toEqual('Singlet Hijau (1)\nBaju Merah Mantap (2)');
});