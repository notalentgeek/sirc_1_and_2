import Cart from '../Cart';

test(`
let cart = new Cart();
expect(cart.addProduct('Baju Merah Mantap', 1)).toEqual(
  { 'Baju Merah Mantap': 1 }
);
  `,
  () => {
    let cart = new Cart();
    expect(cart.addProduct('Baju Merah Mantap', 1)).toEqual(
      { 'Baju Merah Mantap': 1 }
    );
  }
);

test(`
let cart = new Cart();
expect(cart.addProduct('Baju Merah Mantap', 1)).toEqual(
  { 'Baju Merah Mantap': 1 }
);
expect(cart.addProduct('Baju Merah Mantap', 1)).toEqual(
  { 'Baju Merah Mantap': 2 }
);
  `,
  () => {
    let cart = new Cart();
    expect(cart.addProduct('Baju Merah Mantap', 1)).toEqual(
      { 'Baju Merah Mantap': 1 }
    );
    expect(cart.addProduct('Baju Merah Mantap', 1)).toEqual(
      { 'Baju Merah Mantap': 2 }
    );
  }
);

test(`
let cart = new Cart();
expect(cart.addProduct('Baju Merah Mantap', 1)).toEqual(
  { 'Baju Merah Mantap': 1 }
);
expect(cart.addProduct('Baju Merah Mantap', 10)).toEqual(
  { 'Baju Merah Mantap': 11 }
);
  `,
  () => {
    let cart = new Cart();
    expect(cart.addProduct('Baju Merah Mantap', 1)).toEqual(
      { 'Baju Merah Mantap': 1 }
    );
    expect(cart.addProduct('Baju Merah Mantap', 10)).toEqual(
      { 'Baju Merah Mantap': 11 }
    );
  }
);

