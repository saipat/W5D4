// Bubble Sort - Javascript

Array.prototype.bubbleSort = function () {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for(let i=0; i<(this.length-1); i++){
      if (this[i] > this[i+1]){
        [this[i], this[i+1]] = [this[i+1], this[i]];
        swapped = true;
      }
    }
  }
  return this;
};

// console.log([5, 3, 4, 2, 1].bubbleSort());


//String#substrings - receives a string, returns an array of all substrings

String.prototype.subStrings = function() {
  let strings = [];

  for(let i=0; i<this.length; i++){
    for(let j=(i+1); j<= this.length; j++){
      strings.push(this.slice(i, j));
    }
  }

  return strings;
};


console.log("apple".subStrings());
