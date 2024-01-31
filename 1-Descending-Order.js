// code war
// Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/

function descendingOrder(n) {
  const number = parseFloat(n);

  if (number >= 0) {
    const numberArray = number.toString().split("");
    const sortedArray = numberArray.sort((a, b) => b - a);
    const sortedNumber = parseFloat(sortedArray.join(""));
    return sortedNumber;
  }
}

console.log(descendingOrder(42145));
