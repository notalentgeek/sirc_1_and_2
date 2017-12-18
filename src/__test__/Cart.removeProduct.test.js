import Cart from '../Cart';

test(`
let cart = new Cart();
expect(cart.addProduct('Baju Merah Mantap', 1)).toEqual(
  { 'Baju Merah Mantap': 1 }
);
expect(cart.removeProduct('Baju Merah Mantap')).toEqual(
  {}
);
  `,
  () => {
    let cart = new Cart();
    expect(cart.addProduct('Baju Merah Mantap', 1)).toEqual(
      { 'Baju Merah Mantap': 1 }
    );
    expect(cart.removeProduct('Baju Merah Mantap')).toEqual(
      {}
    );
  }
);
