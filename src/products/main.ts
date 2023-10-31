import { addProduct, calcStock, products } from './product.service';

addProduct({
  name: 'P1',
  createdAt: new Date,
  stock: 10
});
addProduct({
  name: 'P2',
  createdAt: new Date,
  stock: 6,
  size: 'M'
});

console.log(products);

console.log(calcStock());
