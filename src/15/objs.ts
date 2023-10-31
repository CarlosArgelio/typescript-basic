(() => {
  type Sizes = 'S'|'M'|'L'|'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = []

  const addProduct = (product: Product) => {
    products.push(product);
  }

  addProduct({
    title: 'P1',
    createdAt: new Date,
    stock: 10
  });
  addProduct({
    title: 'P2',
    createdAt: new Date,
    stock: 10,
    size: 'M'
  });
  console.log(products);

})();
