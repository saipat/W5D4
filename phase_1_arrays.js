// Array#uniq - returns a new array containing only the unique elements of the original array & the unique elements should be in the order in which they first appear & should not mutate the original array

Array.prototype.uniq = function() {
  let result = [];

  for(let i=0; i<this.length; i++){
    if (result.indexOf(this[i]) === -1){
      result.push(this[i]);
    }
  }
  return result;
};

// console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());

// Array#twoSum - returns an array of position pairs where the elements sum to zero

Array.prototype.twoSum = function(){
  let indices = [];

  for(let i=0; i<this.length; i++){
    for(let j=(i+1); j<this.length; j++){
      if (this[i]+this[j] === 0){
        indices.push([i,j]);
      }
    }
  }
  return indices;
};

// console.log([-1, 0, 2, -2, 1].twoSum());


// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose & should not mutate the original array

Array.prototype.transpose = function() {
  const columns = Array.from(
    {length: this[0].length},
    () => Array.from({length: this.length})
  )

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      columns[i][j] = this[j][i];
    }
  }
  return columns;
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());
