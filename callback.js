//Callbacks 
function task1(){
    setTimeout(() => {
        console.log("Task 1 completed");
    }, 6000);
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2 completed");
        callback();
    }, 3000);
}

task2(task1);