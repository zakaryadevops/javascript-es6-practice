// Define an arrow function 'add' that takes two parameters and returns their sum
// const add = (a, b) => a + b

// // Call the function with arguments 2 and 3, output will be 5
// console.log(add(2, 3))

const object = {
    name : 'John',
    greet : () => {
        // 'this' in arrow functions does not refer to the object, it refers to the enclosing context
        console.log(`Hello, my name is ${this.name}`) // 'this.name' will be undefined
    },

    greetWithFunction() {
        // 'this' in regular functions refers to the object itself
        console.log(`Hello, my name is ${this.name}`) // 'this.name' will correctly refer to 'John'
    }
}

object.greet() 
object.greetWithFunction()