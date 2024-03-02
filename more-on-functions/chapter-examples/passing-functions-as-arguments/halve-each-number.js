let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halfNum = function(n){
    return n / 2;
};
let halved = nums.map(halfNum);

console.log(halved);

let dividedByTwo = nums.map(function(num){
    return num / 2;
});

console.log(dividedByTwo);
