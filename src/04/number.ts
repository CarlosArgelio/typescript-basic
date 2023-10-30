(() => {
  let productPrice = 100;
  productPrice = 12;

  console.log('productPrice ', productPrice);

  let customerAge: number = 28;
  //customerAge = customerAge + '1'; // JavaScrip == 281 but here ir a error
  customerAge = customerAge + 1; // 281
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);

  if (productInStock > 10) {
    console.log('is greather');
  }

  let discount = parseInt('123');
  console.log('discount', discount);

  let hex = 0xfff;
  console.log('hex', hex);

  let bin = 0b00110;
  console.log('bin', bin);

  const myNumber: number = 10;

})();
