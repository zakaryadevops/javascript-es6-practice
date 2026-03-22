const user = {name : 'Noor', age : 23};

const newUser = {...user , city : 'khushab'}

function multiply(multiplier , ...numbers)
{
    let arrNum = [...numbers];
    return arrNum.map(n => n*multiplier);
}

console.log(newUser);
console.log(multiply(2 ,1,2,3,4));