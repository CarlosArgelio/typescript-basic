(() => {
  type UserID = string | number | boolean;
  let userId: UserID;

   // Literal types

   type Sizes = 'S'|'M'|'L'|'XL';

   function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
   }

   greeting(1, 'M');
   greeting(1, 'S');
});
