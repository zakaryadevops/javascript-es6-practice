const cart = [
  {item: "Book", price: 100},
  {item: "Pen", price: 20},
  {item: "Bag", price: 500}
]

const people = ["Ali", "Ahmed", "Ali", "Sara", "Ahmed"]

const countuniquePeople = people.reduce((acc , person) => {
    if(!acc[person]){
        acc[person] = 1;
    } else {
        acc[person]++;
    }    return acc;
}, {});

console.log(`The total price is ${cart.reduce((total, c) => total + c.price, 0)}`);
console.log(countuniquePeople);