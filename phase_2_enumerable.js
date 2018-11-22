const NUMS = [1,2,3,4,5];

Array.prototype.myEach = function(func){
    for(let i=0; i< this.length; i++){
      func(this[i]);
    }
  };

NUMS.myEach((num) => {
  console.log('Square of ${num}: ${num*num}')
});
