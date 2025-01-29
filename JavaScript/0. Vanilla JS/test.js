
// Prompt for Name and Age
// let 
userName = prompt("What is your name?");
// let
 userAge = prompt("How old will you be this year?");

// Calculate Year of Birth
// if (userName && userAge && !isNaN(userAge)) {
    // let 
    currentYear = new Date().getFullYear(); // Get the current year
    // let 
    yearOfBirth = currentYear - userAge; // Calculate the year of birth

    // Display the Result
    alert(`Hello, ${userName}! Since you were born in the year ${yearOfBirth}, You are going to clock ${userAge} this year ${currentYear}.`);
// } else {
//     alert("Please provide a valid name and age.");
// }