import fivaa from '../fivaa';

test(`
expect(fivaa(5)).toEqual(
  '4466666\n335555\n22444\n1133\n002'
);
  `,
  () => {
    expect(fivaa(5)).toEqual(
      '4466666\n335555\n22444\n1133\n002'
    );
  }
);

test(`
expect(fivaa(-5)).toEqual(
  '4466666\n335555\n22444\n1133\n002'
);
  `,
  () => {
    expect(fivaa(-5)).toEqual(
      '4466666\n335555\n22444\n1133\n002'
    );
  }
);

test(`
expect(fivaa(4)).toEqual(
  '335555\n22444\n1133\n002'
);
  `,
  () => {
    expect(fivaa(4)).toEqual(
      '335555\n22444\n1133\n002'
    );
  }
);