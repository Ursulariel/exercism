//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(number) {
    this.number = number;
    this.sumSquare = 0;
    this.squareSum = 0;
  }

  get sumOfSquares() {
    for (var i = 1; i <= this.number; i++) {
      this.sumSquare += i * i;
    }
     return this.sumSquare;
  }

  get squareOfSum() {
    for (var i = 1; i <= this.number; i++) {
      this.squareSum += i;
    }
    this.squareSum = this.squareSum * this.squareSum;
    return this.squareSum;
  }

  get difference() {
    return this.squareSum - this.sumSquare;
  }
}