function countInArray(array, integer) {
  let count = 0;
  let i = 0;
  let currentElement;
  while (i < array.length) {
    currentElement = array[i]
    if (integer == currentElement) {
      count = count + 1;
    }
    i++
  }
  return count;
}

let arraytest = [1, 1, 1, 1, 1, 2];
let countMemory = countInArray(arraytest, 1);
console.log(countMemory);
