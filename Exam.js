const students = [
    { name: "Ali", marks: 85 },
    { name: "Ahmed", marks: 42 },
    { name: "Sara", marks: 91 },
    { name: "John", marks: 65 },            
    { name: "Ayesha", marks: 39 }
];

const PassedStudents = students.filter(s => s.marks >= 50);

const Names = PassedStudents.map(s => s.name);

const sortedNames = Names.sort();

console.log(sortedNames);


const cart = [
    { product: "Laptop", price: 1000, quantity: 2 },
    { product: "Mouse", price: 25, quantity: 3 },
    { product: "Keyboard", price: 75, quantity: 1 }
];

const totalPrice = cart.reduce((total, item) => {
    total += item.price * item.quantity;
    return total;
}, 0);

console.log(totalPrice);

function countCharacters(str){
    const charCount = {};
    for(let i = 0 ; i <str.length ; i++){
        if(!charCount[str[i]]){
            charCount[str[i]] = 0;
        }
        charCount[str[i]]++;
    }
    return charCount;
}

console.log(countCharacters("Javascript"));


const numbers = [4,2,7,2,4,9,1,9];

for(let i = 0; i < numbers.length; i++){
    for(let j = i + 1; j < numbers.length; j++){
        if(numbers[i] === numbers[j]){
            numbers.splice(j, 1);
        }
    }
}

console.log(numbers);

// do the same thing using filter method

const uniqueNumbers = numbers.filter((num, index) => {
    return numbers.indexOf(num) === index;
});
console.log(uniqueNumbers);


const products = [
    {name:"Laptop",price:1000},
    {name:"Gaming Mouse",price:50},
    {name:"Phone",price:600},
    {name:"Monitor",price:250}
];

function searchProductsUsingName(searchTerm){
    return products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

console.log(searchProductsUsingName("Mo"));

const users = [
{
id:1,
name:"Ali",
isActive:true
},
{
id:2,
name:"Sara",
isActive:false
},
{
id:3,
name:"Ahmed",
isActive:true
}
];

function getActiveUsers(users){
    return users.filter(user => user.isActive);
}

console.log(getActiveUsers(users));

function groupbyParity(numbers){
    const grouped = numbers.reduce((acc, num) => {
        const key = num % 2 === 0 ? 'even' : 'odd';
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(num);
        return acc;
    }, {});
    return grouped;   
}

console.log(groupbyParity([1,2,3,4,5,6]));