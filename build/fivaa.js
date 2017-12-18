"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function fivaa(anyNumber) {
  var row = '';
  var limitAbs = Math.abs(anyNumber);

  for (var i = 0; i < limitAbs; i++) {
    var firstTwo = limitAbs - 1 - i;
    var trailingRest = limitAbs + 1 - i;
    var column = "" + firstTwo + firstTwo;

    for (var j = trailingRest; j > 1; j--) {
      column = "" + column + trailingRest;
    }

    row = "" + row + column + "\n";
  }

  return row.replace(/\n$/, "");
}

exports.default = fivaa;