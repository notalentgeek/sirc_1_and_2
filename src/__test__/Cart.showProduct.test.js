import Cart from '../Cart';

test(`
let cart = new Cart();
cart.addProduct("Baju Merah Mantap", 1);
cart.addProduct("Baju Merah Mantap", 1);
cart.addProduct("Bukuku", 3);
cart.removeProduct("Bukuku");
cart.addProduct("Singlet Hijau", 1);
cart.removeProduct("ProdukBohongan");
expect(cart.showCart()).toEqual(
  'Baju Merah Mantap (2)\nSinglet Hijau (1)'
);
  `,
  () => {
    let cart = new Cart();
    cart.addProduct("Baju Merah Mantap", 1);
    cart.addProduct("Baju Merah Mantap", 1);
    cart.addProduct("Bukuku", 3);
    cart.removeProduct("Bukuku");
    cart.addProduct("Singlet Hijau", 1);
    cart.removeProduct("ProdukBohongan");
    expect(cart.showCart()).toEqual(
      'Baju Merah Mantap (2)\nSinglet Hijau (1)'
    );
  }
);

test(`
let cart = new Cart();
cart.addProduct("Singlet Hijau", 1);
cart.addProduct("Baju Merah Mantap", 1);
cart.addProduct("Baju Merah Mantap", 1);
cart.addProduct("Bukuku", 3);
cart.removeProduct("Bukuku");
cart.removeProduct("ProdukBohongan");
expect(cart.showCart()).toEqual(
  'Singlet Hijau (1)\nBaju Merah Mantap (2)'
);
  `,
  () => {
    let cart = new Cart();
    cart.addProduct("Singlet Hijau", 1);
    cart.addProduct("Baju Merah Mantap", 1);
    cart.addProduct("Baju Merah Mantap", 1);
    cart.addProduct("Bukuku", 3);
    cart.removeProduct("Bukuku");
    cart.removeProduct("ProdukBohongan");
    expect(cart.showCart()).toEqual(
      'Singlet Hijau (1)\nBaju Merah Mantap (2)'
    );
  }
);