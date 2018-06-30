/*Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, 
it is the product of some integer with itself.*/


var isSquare = function(n){
 
 let whole=Math.sqrt(n);
  
  if (Number.isInteger(whole)){
  
  return true;
  }
 return false
}

isSquare(-1);
isSquare(0);
isSquare(3);
isSquare(4);
isSquare(25);
isSquare(26);
