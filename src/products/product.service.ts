import { Product } from "./product.model";

export const products: Product[] = []

export const addProduct = (product: Product) => {
  products.push(product);
}

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });
  return total
}
