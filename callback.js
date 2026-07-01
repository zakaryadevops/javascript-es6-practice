//Callbacks 1 
// function task1(){
//     setTimeout(() => {
//         console.log("Task 1 completed");
//     }, 6000);
// }

// function task2(callback){
//     setTimeout(() => {
//         console.log("Task 2 completed");
//         callback();
//     }, 3000);
// }

// task2(task1);

// function greetings(name , callback){
//     console.log(`Hello ${name}`);
//     setTimeout(() =>{
//         callback();
//     } , 2000)
// }

// function sayGoodbye(){
//     console.log("Goodbye!");
// }

// greetings("Zakarya", sayGoodbye)

// console.log("Counter for happy new year");
// for(let i = 10; i >= 0; i--){
//     setTimeout(() => {
//         if(i === 0){
//             console.log("Happy New Year!");
//         }else{
//             console.log(i);
//         }
//     }, (10 - i) * 1000);}

//// Callback HELL
// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("Step 3");
//     }, 1000);
//   }, 1000);
// }, 1000);

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data received!");
  }, 1500);
}

fetchData((result) => {
  console.log(result);
});

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 1000);

// for (let i = 0; i < 10000000000; i++) {}

// console.log("End");