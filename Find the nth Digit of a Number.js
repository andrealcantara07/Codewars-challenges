/*Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0*/

var findDigit = function(num, nth){
num = Math.abs(num);
var hold = [];
var quot = hold.push(num);
var change = hold.toString().split('').reverse().join('');

var sum= parseInt(change.charAt(nth-1)) ;



var neg=Math.sign(nth);

if (nth < 0) {
return neg
} 
  else if (nth==0) {
  return -1;
  
  }
 else if (nth > num) {
 return 0;
 } 
else if (isNaN(sum)) {
return 0;
} 
    return sum;
}

findDigit(5673, 4);    
findDigit(129, 2);    
findDigit(-2825, 3);   
findDigit(-456, 4);     
findDigit(0, 20);      
findDigit(65, 0);      
findDigit(24, -8);  
