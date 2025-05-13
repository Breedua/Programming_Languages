console.log("Hello World") // inline comment - comments only from the slash
 /* Multiline comment - 
 Comments out multiple lines 
 and the whole line*/


 /* Data Types and Variables
 underfined, null, boolean, number, string, symbol, object 
 */

 /*Variables are used to store and declare data
 const myName ="Edua"
 myName is the variable which in JS is written only in carmelCase
 "Edua" is the data stored in the variable myName.

 To declare variables we use either const, let or var depending on the situation and application.
 */

//Storing values with Assignment operator
/* End all lines in JS with a semi colon;

To assign a variable e.g
var a;  Here the variable is just declared not assigned

a = 7; Now the variable is assigned and because it has already been declared earlier, doesn't need to be declared again.(BUTT!!!  If we disregard the first line code then this is only assigned not declared)

var b = 2; here the variable is both assigned and declared


The addition of const/let/var declares a variable, 
The addition of an assignment operator like = assigns a variable*/



console.log allows us to see things in the console
 

// Initializing variables with assignment operators

var a = 9; // the = sign is the assignment operator and DOES NOT MEAN EQUAL TO

//declaringProperCarmelCaseForJavascriptUse.  
The above line is how to properly write carmel case

//Adding numbers is done with the "+" sign e.g
let sum = 10 + 10;
let difference = 45 - 37;

//Multiplying Numbers is done with * sign

//division of numbers is done with the / sign

//incrementing numbers example1 is:
let increase = 95;
//to increment we say
increase = increase + 1;

example 2
let increase = 95;
increase++;

//decrementing numbers is done either with -1 or -- just like increments.

//Finding a remainder is done using the remainder operator "%". This is usually used to determinre if a number is even or odd.

// To append variables to string, use the "+=" operator e.g
 let description = "awesome!";
 let appendResult = "Ighalo Eduaina Brenda is";
 appendResult += description;

//string methods
1.variable.length
2. bracket notation 
3. Bracket notation to get the last character in a string even when the length of string is unknown is done by:
 variable[variable.length - 1]; the minus one will give the last index of the string
 to get the 3rd to last letter or 2nd to last letter the same thing applies:
 variable[variable.length - 2]; to get the 2nd to last number
 variable[variable.length - 3]; to get the 3rd to last number

 //ARRAYS
 //Acessing multi-dimensional arrays with indexes/bracket notations e.g:

 let myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
 This array contains 1 main array, 4 sub arrays and 3 elements iclusive of an array in the 4th sub array.

 bracket notations/indexes are used to access each value in each main and sub array.

 let myData = myArray[3][0][2]; This targets the 3rd array from 0 and the last value in the array which is the value 12