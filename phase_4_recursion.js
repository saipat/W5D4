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

//exponent(base, exp) - receives a base and exponent, returns the base raise to the power of the exponent (base ^ exp)

//Version 1

function expo1(base, exp){
  if (exp === 0 || base === 0){
    return 1;
  }else if (exp === 1) {
    return base;
  }

  return base * expo1(base, (exp-1));
}

// console.log(expo1(2, 4));

//Version 2

function expo2(base, exp){
  if (exp === 0 || base === 0){
    return 1;
  }else if (exp === 1) {
    return base;
  }

  if (exp%2 ===0) {
    return expo2(base, exp/2) ** 2;
  }else {
    return base * (expo2(base, (exp-1)/2)) ** 2;
  }
}

// console.log(expo2(2, 5));

//Fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers

function fibo(n){
  // if (n === 0){
  //   return [];
  // }else if (n===1) {
  //   return [0];
  // }else if (n===2){
  //   return [0,1];
  // }

  if (n < 3){
    return [0,1].slice(0, n);
  }

  let fibs = fibo(n-1);
  fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2])
  return fibs;
}
// console.log(fibo(1));
//Iteration.
function fibsIter(n){
  let fibs = [0,1];
  if (n < 3){
    return fibs.slice(0, n);
  }

  while(fibs.length < n){
    fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);
  }

  return fibs;
}
// console.log(fibsIter(5));

//DeepDup - deep dup of an Array!

function deepDup(array){
  return array.map((el) => el.constructor.name === 'Array' ? deepDup(el) : el);
}

// console.log(deepDup[1,2,3,4,5])
// console.log(deepDup([[1,2,3],4]));
// const array = [[1,2,3],4];
// const dupedArray = deepDup(array);
// console.log(`deepDup original = ${JSON.stringify(array)}`);
// dupedArray[0].push(4);
// console.log(`deepDup original = ${JSON.stringify(array)} (should not be mutated)`);
// console.log(`deepDup duped = ${JSON.stringify(dupedArray)} (should be mutated)`);

//Binary Search.

var bSearch = function(array, target){
  if (array.length === 0 || (array.length===1 && array[0]!=target)){
    return -1;
  }

  const middle = Math.floor(array.length / 2);

  if (target < array[middle]){
    return bSearch(array.slice(0, middle), target);
  }else{
    let result = bSearch(array.slice(middle+1), target);
    return (result === -1) ? -1 : middle + 1 + result;
  }
};

// console.log(bSearch([1, 2, 3, 4], 3));
// console.log(`bSearch([1, 2, 3], 2.5) = ${bSearch([1, 2, 3], 2.5)}`);



//merge_sort

function mergeSort(array){
  if (array.length <= 1){
    return array;
  }
  const middle = Math.floor(array.length / 2);

  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  return merge(left, right);
}

function merge(left, right){
  const mergedArray = [];

  while(left.length > 0 && right.length > 0){
    let nextElement = (left[0] < right[0] ? left.shift() : right.shift());
    mergedArray.push(nextElement);
  }

  return mergedArray.concat(left, right);
}

// console.log(`mergeSort([4, 5, 2, 3, 1]) = ${mergeSort([4, 5, 2, 3, 1])}`);

// subsets(arr) - receives an array, returns an array containing all the subsets of the original array

function subsets(array) {
  if (array.length === 0){
    return [[]];
  }

  const first = array[0];
  const noFirst = subsets(array.slice(1));

  const withFirst = noFirst.map( sub => [first].concat(sub));

  return noFirst.concat(withFirst);
}

// console.log(`subsets([1, 3, 5]) = ${JSON.stringify(subsets([1, 3, 5]))}`);
