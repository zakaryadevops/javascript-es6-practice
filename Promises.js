// //let fetch an API data using promise
// // creating of promise
// let fetchData = new Promise((resolve, reject) => {
//     let data = {
//         name: "zakarya",
//         age: 25,
//     }
//     if(data){
//         resolve(data);
//     }else{
//         reject("No data found");
//     }
// })
// //consuming of promise 
// fetchData.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.error(error);
// })

// function ThreeSec(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello world");
//         }, 3000);
//     });
// }

// ThreeSec()
// .then((resultant)=>{
//     console.log(resultant);
// })

// let Uppercase = new Promise((resolve, reject)=>{
//     let string = "hello world";
//     if(typeof string === "string")
//     {
//         resolve(string.toUpperCase());
//     }
//     else{
//         reject("Invalid input");
//     }
// })

// Uppercase
// .then((result)=>{
//     console.log(result);
//     return result;
// })
// .then((data)=>{
//     console.log(data+="!!!")
// })
// .catch((err)=>{
//     console.error(err);
// })

// function Random(){
//     return new Promise ((reslove , reject )=>{
//         let num = Math.random();
//         if(num > 0.5){
//             reslove(num);
//         }else{
//             reject(`Number is less than 0.5 that is : ${num}`);
//         }   
//     }
//     )}

//     Random()
//     .then((response)=>{
//         console.log(`Congrats! its a number : ${response}`)
//     }).catch((error)=>{
//         console.log(error);
//     })

// let promise_1 = new Promise((resolve,reject)=>{
//     let body = {name : "zakarya" , age : "25"}

//     if(body.age >= 18)
//     {
//         resolve("Allowed to enter in our website!")
//     }else{
//         reject("Nah! too young ")
//     }
// })

// let promise_2 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("Compelted")
//     },3000)
// })

// Promise.all([promise_1,promise_2]).then((resolved)=>{
//     console.log(resolved);
// })

// async function random() {
    
//     try{
//         const num = await Random();
//     console.log(num);
//     }
//     catch(error){
//         console.log(error);
//     }
//     finally{
//         console.log("This will always execute")
//     }
// }

// random();

const promise = new Promise((resolve, reject) => {
    console.log("A");
    resolve("B");
});

console.log("C");

promise.then((data) => {
    console.log(data);
});

console.log("D");