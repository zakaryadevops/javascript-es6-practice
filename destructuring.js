/* 
   Create an object 'user' with two properties: 
   - name: "Ali"
   - age: 20
*/
const user = {
  name: "Ali",
  age: 20
}

/* 
   Use object destructuring to extract properties directly.
   This means we don’t need to write user.name or user.age later.
   Instead, we can access them as variables 'name' and 'age'.
*/
const { name, age } = user

// Print the value of 'name' → "Ali"
console.log(name) 

// Print the value of 'age' → 20
console.log(age)  