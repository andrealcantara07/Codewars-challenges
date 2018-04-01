function findMissingNumber(sequence){
  /*You have a sequence of positive numbers starting with 1, but one number is missing!

Find out the missing number; if the sequence is not broken, you should return 0. Each sequence always increments by 1.

In short: an invalid sequence (a string with non numeric character) must return 1, an already complete (or empty) sequence must return 0; a broken sequence with more than one number missing should return the lowest missing number; otherwise return the missing number.

Note that the input may be with random order.*/
  if(sequence === ""){
    return 0;
  }
 else if (!/^(\d+ )+\d+$/gi.test(sequence)){
   return 1;
  }
  else{
  var arr = sequence.split(' ').map(x => +x);
  var max = Math.max(...arr);
  for(var i = 1; i < max; ++i)
    if (arr.find(x => x == i) == undefined)
    return i;
  return 0;
  
  
  }
}


findMissingNumber("1 2 3 5");
findMissingNumber("1 3");
findMissingNumber("1 5");
findMissingNumber("");
findMissingNumber("1 2 3 4 5");
findMissingNumber("2 3 4 5");
findMissingNumber("2 6 4 5 3");
findMissingNumber("2 1 4 3 a");
