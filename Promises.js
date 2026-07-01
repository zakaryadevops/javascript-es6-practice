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

// const promise = new Promise((resolve, reject) => {
//     console.log("A");
//     resolve("B");
// });

// console.log("C");

// promise.then((data) => {
//     console.log(data);
// });

// console.log("D");

const p1 = new Promise(resolve => setTimeout(() => resolve("First done"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Second done"), 2000));

Promise.all([p1, p2])
  .then(results => console.log("All resolved:", results))
  .catch(err => console.error("Error:", err));


const p3 = new Promise(resolve => setTimeout(() => resolve("Success!"), 1500));
const p4 = new Promise((_, reject) => setTimeout(() => reject("Failed!"), 1000));

Promise.allSettled([p3, p4])
  .then(results => console.log("All settled:", results));

const p5 = new Promise(resolve => setTimeout(() => resolve("Fast one"), 500));
const p6 = new Promise(resolve => setTimeout(() => resolve("Slow one"), 2000));

Promise.race([p5, p6])
  .then(result => console.log("Race winner:", result))
  .catch(err => console.error("Race error:", err));

const p7 = new Promise((_, reject) => setTimeout(() => reject("Rejected 1"), 500));
const p8 = new Promise(resolve => setTimeout(() => resolve("Resolved 2"), 1000));
const p9 = new Promise((_, reject) => setTimeout(() => reject("Rejected 3"), 1500));

Promise.any([p7, p8, p9])
  .then(result => console.log("Any result:", result))
  .catch(err => console.error("All failed:", err));
