let divisor = 7;
let hits = 0;
let startingPoint = 0;
let currentPoint = startingPoint;
let endingPoint = 1000;

for ( ; currentPoint <= endingPoint; currentPoint++) {
  if (currentPoint % divisor == 0) {
    console.log(currentPoint);
    hits += 1; // What's the difference between += and ++ when trying to increment a variable?
  }
}
  console.log("There were " + hits + " numbers between " + startingPoint + " and " + endingPoint + " that are evenly divisible by " + divisor + ".");
