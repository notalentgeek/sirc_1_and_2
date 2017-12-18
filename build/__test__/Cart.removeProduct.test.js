'use strict';

var _Cart = require('../Cart');

var _Cart2 = _interopRequireDefault(_Cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('\nlet cart = new Cart();\nexpect(cart.addProduct(\'Baju Merah Mantap\', 1)).toEqual(\n  { \'Baju Merah Mantap\': 1 }\n);\nexpect(cart.removeProduct(\'Baju Merah Mantap\')).toEqual(\n  {}\n);\n  ', function () {
  var cart = new _Cart2.default();
  expect(cart.addProduct('Baju Merah Mantap', 1)).toEqual({ 'Baju Merah Mantap': 1 });
  expect(cart.removeProduct('Baju Merah Mantap')).toEqual({});
});