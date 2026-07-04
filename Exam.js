// const students = [
//     { name: "Ali", marks: 85 },
//     { name: "Ahmed", marks: 42 },
//     { name: "Sara", marks: 91 },
//     { name: "John", marks: 65 },            
//     { name: "Ayesha", marks: 39 }
// ];

// const PassedStudents = students.filter(s => s.marks >= 50);

// const Names = PassedStudents.map(s => s.name);

// const sortedNames = Names.sort();

// console.log(sortedNames);


// const cart = [
//     { product: "Laptop", price: 1000, quantity: 2 },
//     { product: "Mouse", price: 25, quantity: 3 },
//     { product: "Keyboard", price: 75, quantity: 1 }
// ];

// const totalPrice = cart.reduce((total, item) => {
//     total += item.price * item.quantity;
//     return total;
// }, 0);

// console.log(totalPrice);

// function countCharacters(str){
//     const charCount = {};
//     for(let i = 0 ; i <str.length ; i++){
//         if(!charCount[str[i]]){
//             charCount[str[i]] = 0;
//         }
//         charCount[str[i]]++;
//     }
//     return charCount;
// }

// console.log(countCharacters("Javascript"));


// const numbers = [4,2,7,2,4,9,1,9];

// for(let i = 0; i < numbers.length; i++){
//     for(let j = i + 1; j < numbers.length; j++){
//         if(numbers[i] === numbers[j]){
//             numbers.splice(j, 1);
//         }
//     }
// }

// console.log(numbers);

// // do the same thing using filter method

// const uniqueNumbers = numbers.filter((num, index) => {
//     return numbers.indexOf(num) === index;
// });
// console.log(uniqueNumbers);


// const products = [
//     {name:"Laptop",price:1000},
//     {name:"Gaming Mouse",price:50},
//     {name:"Phone",price:600},
//     {name:"Monitor",price:250}
// ];

// function searchProductsUsingName(searchTerm){
//     return products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
// }

// console.log(searchProductsUsingName("Mo"));

// const users = [
// {
// id:1,
// name:"Ali",
// isActive:true
// },
// {
// id:2,
// name:"Sara",
// isActive:false
// },
// {
// id:3,
// name:"Ahmed",
// isActive:true
// }
// ];

// function getActiveUsers(users){
//     return users.filter(user => user.isActive);
// }

// console.log(getActiveUsers(users));

// function groupbyParity(numbers){
//     const grouped = numbers.reduce((acc, num) => {
//         const key = num % 2 === 0 ? 'even' : 'odd';
//         if (!acc[key]) {
//             acc[key] = [];
//         }
//         acc[key].push(num);
//         return acc;
//     }, {});
//     return grouped;   
// }

// console.log(groupbyParity([1,2,3,4,5,6]));


const numbers = [5,10,15];

const result = numbers
.filter(num=>{
    return num>=10;
})
.map(num=> num*2);

console.log(result);


const users = [
{
id:1,
name:"Ali",
age:22
},
{
id:2,
name:"Sara",
age:18
},
{
id:3,
name:"Ahmed",
age:26
},
{
id:4,
name:"John",
age:16
}
];

function getAdultUsers(users){
    const Adult = users.filter(user => user.age >= 20);
    const Names = Adult.map(user => user.name);
    const sortedNames = Names.sort();
    return sortedNames;
}

console.log(getAdultUsers(users));

console.log("A");

setTimeout(()=>{
    console.log("B");
},0);

Promise.resolve()
.then(()=>{
    console.log("C");
});

console.log("D");
// Output: A D C B reason is because setTimeout and promise are asynchronous and are send to the event loop to handle they they will run after the synchorunous code run in sequnece and print A and D first than when call stack becomes empty the event loop will handle the promise first and print C as it is a microtask that has high priority and then setTimeout will be handled because it is macrotask and print B

const user1={
name:"Ali",
age:22
};

const user2={
city:"Lahore",
country:"Pakistan"
};

function mergeObjects(obj1,obj2){
    return {...obj1,...obj2};
}
console.log(mergeObjects(user1,user2));

async function fetchUsers(){
    try{
        const res = await fetch("/users");
        if(!res.ok){
            throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

function mapArray(arr,callback){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i],i,arr));
    }
    return result;
}

console.log(mapArray([1,2,3],(num)=>num*2));


const orders=[
{
customer:"Ali",
amount:10
},
{
customer:"Sara",
amount:100
},
{
customer:"Ahmed",
amount:50
}
];

const totalAmount = orders.reduce((total,order)=>{
    return total + order.amount;
},0);

let bigCustomerIndex = 0 ;
for(let i = 0; i < orders.length; i++){
    let j = i + 1;
    if(orders[i].amount > orders[j]?.amount){
        bigCustomerIndex = i ;
    }

}

const Review = {
    totalRevenue : totalAmount,
    highestOrder : orders[bigCustomerIndex].customer
}

console.log(Review);

const students=[
{
name:"Ali",
marks:85,
passed:true
},
{
name:"Sara",
marks:92,
passed:true
},
{
name:"Ahmed",
marks:41,
passed:false
},
{
name:"John",
marks:76,
passed:true
}
];

// {
// averageMarks:84.33,
// topStudent:"Sara",
// passedStudents:[
// "Ali",
// "John",
// "Sara"
// ]
// }

function getStudentStats(students){
    const studentStats = {
    avearageMarks : 0,
    topStudent : "",
    passedStudents : []
}


studentStats.avearageMarks = parseFloat((students.reduce((total,student)=>{
    return total += student.marks;
},0) / students.length).toFixed(2));

studentStats.topStudent = students.reduce((top,student)=>{
    return student.marks > top.marks ? student : top;
},students[0]).name;

studentStats.passedStudents = students.filter(s => {
    return s.passed;
}).map(s => s.name);
 return studentStats;
}
console.log(getStudentStats(students));

