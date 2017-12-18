'use strict';

var _fivaa = require('../fivaa');

var _fivaa2 = _interopRequireDefault(_fivaa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('\nexpect(fivaa(5)).toEqual(\n  \'4466666\n335555\n22444\n1133\n002\'\n);\n  ', function () {
  expect((0, _fivaa2.default)(5)).toEqual('4466666\n335555\n22444\n1133\n002');
});

test('\nexpect(fivaa(-5)).toEqual(\n  \'4466666\n335555\n22444\n1133\n002\'\n);\n  ', function () {
  expect((0, _fivaa2.default)(-5)).toEqual('4466666\n335555\n22444\n1133\n002');
});

test('\nexpect(fivaa(4)).toEqual(\n  \'335555\n22444\n1133\n002\'\n);\n  ', function () {
  expect((0, _fivaa2.default)(4)).toEqual('335555\n22444\n1133\n002');
});