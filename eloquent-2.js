//Pyramid
var hash = "#";
while (hash.length < 8) {
  console.log(hash);
  hash += "#";
  }

// Fizz Buzz (part 1)
for (var i = 1; i < 101; i++){
  if (i % 3 == 0)
    	{console.log("Fizz");}
  else if (i % 5 == 0)
    	{console.log("Buzz");}
  else
      {console.log(i);}
}

//Fizz Buzz (part 2)
for (var i = 1; i < 101; i++){
  if (i % 3 == 0 && i % 5 == 0)
    	{console.log("FizzBuzz");}
  else if (i % 3 == 0)
    	{console.log("Fizz");}
  else if (i % 5 == 0)
    	{console.log("Buzz");}
  else {
      console.log(i);}
}

//Chess board (part 1)
var i = ""; // Define the chess board
for (var height = 0; height < 8; height++) { /* First loop : cycle 8 times through the second inner loop */
  for (var width = 0; width < 8; width++) { /* Second inner loop : cycle 8 times through the conditions */
    if ((height + width) % 2 == 0) { /*Needs both loops to work : use the 1 height value in the outer loop and cycle through the 8 width value in the inner loop. Sets up the alternance between " " and "#" */
      i += " ";} /* Add the needed symbol*/
    else {
      i += "#";}
  }
  i += "\n"; /* At the end of the inner loop (cycling width value 8 times inside the one height value), ends the outer loop with linebreak and restart it with the next value */
}
console.log(i); /* Display chess board */

//Chess board (part 2)
var i = ""; /* Define the chess board */
var size = 14; /* Define a size variable */
for (var height = 0; height < size; height++) { /* First loop : cycle [size] times through the second inner loop */
  for (var width = 0; width < size; width++) { /* Second inner loop : cycle [size] times through the conditions */
    if ((height + width) % 2 == 0) { /*Needs both loops to work : use the 1 height value in the outer loop and cycle through the [size] width value in the inner loop. Sets up the alternance between " " and "#" */
      i += " ";} /* Add the needed symbol*/
    else {
      i += "#";}
  }
  i += "\n"; /* At the end of the inner loop (cycling width value [size] times inside the one height value), ends the outer loop with linebreak and restart it with the next value */
}
console.log(i); /* Display chess board */
