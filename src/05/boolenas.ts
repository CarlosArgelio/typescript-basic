(() => {
  let isEnable = true;
  /**
   * Error
   * isEnable = 'string'
   * isEnable = 123
   */

  let isNew: boolean = false;

  console.log('isNew', isNew);

  isNew = true;

  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);

  isNew = random >= 0.5 ? true: false;
  console.log('isNew', isNew);

  const myBoolean: boolean = true;
})();
