//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (esquerda, direita) => {
    
  let hamming=0;
  
  if (esquerda === direita) return hamming;
  
  if (esquerda === "") {
    throw Error('left strand must not be empty')
  } else if (direita === "") {
    throw Error('right strand must not be empty')
  } else if (esquerda.length !== direita.length) {
    throw Error('left and right strands must be of equal length')
  } else {
      for (let i=0; i<esquerda.length; i++) {
        if (esquerda[i] != direita[i]) {
          hamming++
        }
      }
      return hamming
    }
  };