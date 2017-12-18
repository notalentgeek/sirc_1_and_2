function fivaa(anyNumber) {
  let row = '';
  let limitAbs = Math.abs(anyNumber);

  for (let i = 0; i < limitAbs; i ++) {
    const firstTwo = limitAbs - 1 - i;
    const trailingRest = limitAbs + 1 - i;
    let column = `${firstTwo}${firstTwo}`;

    for (let j = trailingRest; j > 1; j --) {
      column = `${column}${trailingRest}`
    }

    row = `${row}${column}\n`;
  }

  return row.replace(/\n$/, "");
}

export default fivaa;