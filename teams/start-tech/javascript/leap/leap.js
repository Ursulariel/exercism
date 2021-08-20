//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (ano) => {
  var isDivisibleBy4 = ano % 4 === 0; //ano dividido por 4
  var isDivisibleBy100 = ano % 100 === 0;// ano dividido por 100
  var isDivisibleBy400 = ano % 400 === 0;// anos dividido por 400

   return isDivisibleBy400 || (isDivisibleBy4 && !isDivisibleBy100);
};