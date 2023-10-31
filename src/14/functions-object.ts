(() => {
  const login = (credetentials: {email: string, password: string}) => {
    console.log(credetentials.email, credetentials.password);
  }

  login({
    email: 'carlos@mail.com',
    password: '1234'
  });

  type Sizes = 'S'|'M'|'L'

  const products: any[] = []

  const addProduct = (product: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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
