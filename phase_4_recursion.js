// YEEEEEEE Recursions

// range(start, end) - receives a start and end value, returns an array from start up to end

function range(start, end) {
  if (start === end){
    return [];
  }else if (start > end) {
    return [];
  }

  let numbers = range(start, end-1);
  numbers.push(end-1);
  return numbers;
}

// console.log(range(2,5));
// console.log(range(2,2));
// console.log(range(4,2));

// sumRec(arr) - receives an array of numbers and recursively sums them

function SumOfNumbers(array) {
   if (array.length === 0){
    return 0;
  }

  let lastNumber = array[array.length - 1];
  return SumOfNumbers(array.slice(0, array.length - 1)) + lastNumber;
}

// console.log(SumOfNumbers([1,2,3,4,5]));
// console.log(`SumOfNumbers([1, 3, 5]) = ${SumOfNumbers([1, 3, 5])}`);
