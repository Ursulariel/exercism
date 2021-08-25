//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCodeJunior = color => {
  let num;
  if (color == "black") {
    num = 0;
  } else if (color == "brown") {
    num = 1;
  } else if (color == "red") {
    num = 2;
  } else if (color == "orange") {
    num = 3;
  } else if (color == "yellow") {
    num = 4;
  } else if (color == "green") {
    num = 5;
  } else if (color == "blue") {
    num = 6;
  } else if (color == "violet") {
    num = 7;
  } else if (color == "grey") {
    num = 8;
  } else if (color == "white") {
    num = 9;
  }

  return num;
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

export const colorCode = color => {
  let position = COLORS.indexOf(color);

  if (position == -1) {
    console.log(">>> Unknown color. Only supports:" + COLORS.join(", "));
  }

  return position;
};
