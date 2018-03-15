function highAndLow(numbers){
  //split the numbers to go through each one
  numbers=numbers.split(' ');
  //use Math.min and Math.max to find low and high numbers
  return Math.max.apply(null, numbers)+" "+Math.min.apply(null, numbers);
}

highAndLow("1 2 3 4 5");
