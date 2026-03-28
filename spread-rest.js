// Create an object representing a user with name and age
const user = {name : 'Noor', age : 23};

/* Create a new object by copying all properties of 'user'
 and adding a new property 'city'*/
const newUser = {...user , city : 'khushab'};

// Define a function that multiplies a list of numbers by a given multiplier
function multiply(multiplier , ...numbers)
{
    // Spread the rest parameter 'numbers' into a new array
    let arrNum = [...numbers];
    
    // Use map to multiply each number in the array by the multiplier
    return arrNum.map(n => n * multiplier);
}

// Print the new user object with the added 'city' property
console.log(newUser);

/* Call the multiply function with multiplier = 2 and numbers = 1,2,3,4
 This will return [2,4,6,8]*/
console.log(multiply(2 ,1,2,3,4));