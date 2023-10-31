(() => {
  type Sizes = 'S'|'M'|'L'|'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('P1', new Date(), 12, 'M');

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product2 = createProductToJsonV2('P1', new Date(), 12);
  console.log(product2);
  console.log(product2.title);
  console.log(product2.size);
  console.log(product2.stock);


})();
