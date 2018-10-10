//Complete the square sum method so that it squares each number passed into it and then sums the results together.

//For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){

let ans = [];

numbers.forEach(function(number) {
return ans.push(Math.pow(number, 2));

});

return ans.reduce((a, b) => a + b, 0);
} 






squareSum([1, 2]);
squareSum([0, 3, 4, 5]);
