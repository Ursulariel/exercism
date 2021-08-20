//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const gigasecond = (initialDate) => {
  var converDate = initialDate.getTime(); //convertendo para milisegundos (forma que o Javascript faz cálculo de datas)
  var finalDate = converDate + 1e9 * 1000 //somando data em milisegundos com 1 gigasegundo (vezes 1000 para ficar em milisegundo)

    return new Date(finalDate);

};