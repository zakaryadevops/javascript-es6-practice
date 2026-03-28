// Define an array of user objects, each with a name and age
const users =[
    {name: 'Noor', age: 23},
    {name: 'Zakarya', age: 21},
    {name : 'Abdullah', age : 20}
]

/* Use map to create a new array containing only the 'name' property of each user
 'u' represents each user object in the array */
console.log(users.map(u => u.name));