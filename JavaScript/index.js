// PRACTICE1
// If, else if, else statement practice

// const number = 20;

// if (number > 0){
//     console.log(`${number} is positive`);
// }
// else if (number < 0){
//     console.log(`${number} is negative`);
// }
// else {
//     console.log(`${number} is zero`);
// }


//PRACTICE2
// For loop practice

// for (let i = 1; i <= 10; i++) {
//     console.log('in loop:', i);
// }

// console.log('Loop Finished');


// PRACTICE 3
// Function practice

// const sum = function(num1, num2) {
//     return num1 + num2;  Return the sum of num1 and num2
// };
// Call the function with two numbers as arguments and store the result
// let result = sum(5, 7);
// Use console.log() to print the result to the console
// console.log(result);



//PRACTICE 4
// DOM- Document Object Model

//a
//selecting by element tag
// const para = document.querySelector('h1');
// console.log(para);


//b
//selecting a specific tag/class whee the class is assigned to 2 or more tags/elements 
// 


//c
//selecting all elements of the same kind eg p or h1 etc
// const paras = document.querySelectorAll('p');
// console.log(paras);



//d
//selecting all elements of the same kind eg p or h1 etc using .querySelectAll and specififying which of them in the newly formed nodelist that works like an array but is not an array
// const paras = document.querySelectorAll('p');
// console.log(paras[1]);


//e
//selecting all elements of the same kind eg p or h1 etc .querySelectAll and specififying which of them in the newly formed nodelist using the .forEach function/method in arrow function to bring out a list of all p tags(in this case)
// const paras = document.querySelectorAll('p');
// const me = document.querySelectorAll('.me')
// paras.forEach(para => {
//     console.log(para)
// });
// console.log(paras);
// console.log(me)


//f
//selecting elements using .getelEmentById
// const title = document.getElementById ('ptitle');
// console.log(title);


//g
//selecting elements using .getelEmentByClassName [This returns a html collections not a nodelist and .forEach doesnt work in html collections]
const me = document.getElementsByClassName('me')
console.log(me)

// h
// .getElementsByTagName. [this returns html collection too
//  .querySelector gets only the first element while .querySelectorAll gets all the elements]

//hfm,kle