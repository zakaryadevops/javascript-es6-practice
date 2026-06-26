//let fetch an API data using promise

let fetchData = new Promise((resolve, reject) => {
    let data = {
        name: "zakarya",
        age: 25,
    }
    if(data){
        resolve(data);
    }else{
        reject("No data found");
    }
})

fetchData.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.error(error);
})