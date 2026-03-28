// Define an array of user objects, each with a name and age
const users =[
    {name: 'Noor', age: 23},
    {name: 'Zakarya', age: 21},
    {name : 'Abdullah', age : 20}
]

/* Use filter to return only those users whose age is greater than 21
 'u' represents each user object in the array */
console.log(users.filter(u => u.age > 21));