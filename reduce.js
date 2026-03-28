// Define a shopping cart array with items and their prices
const cart = [
  {item: "Book", price: 100},
  {item: "Pen", price: 20},
  {item: "Bag", price: 500}
]

// Define an array of people (with duplicates)
const people = ["Ali", "Ahmed", "Ali", "Sara", "Ahmed"]

// Use reduce to count how many times each person appears in the array
const countuniquePeople = people.reduce((acc , person) => {
    // If the person is not yet in the accumulator object, initialize with 1
    if(!acc[person]){
        acc[person] = 1;
    } else {
        // If already exists, increment the count
        acc[person]++;
    }
    return acc; // Return the updated accumulator object
}, {}); // Start with an empty object as the accumulator

// Calculate the total price of all items in the cart using reduce
console.log(`The total price is ${cart.reduce((total, c) => total + c.price, 0)}`);

// Print the object showing how many times each person appears
console.log(countuniquePeople);