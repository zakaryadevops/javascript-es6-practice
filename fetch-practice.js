fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(Users => {
    console.log(Users);
}).catch(error => {
    console.error('Error fetching data:', error);
});

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
   users.forEach(user => {
    console.log(`Name: ${user.name}`);
   })
}).catch(error => {
    console.error('Error fetching data:', error);
});

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
   users.forEach(user => {
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Phone: ${user.phone}`);
    console.log('-------------------');
   })
}).catch(error => {
    console.error('Error fetching data:', error);
});



async function fetchUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json();

        console.log(data);
    }
    catch(error){
        console.error('Error fetching data:', error);
    }
}

fetchUsers();

async function fetchUsersnames(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json();

        const usernames = data.map(user => user.username);

        console.log(`Usernames: ${usernames}`);
    }
    catch(error){
        console.error('Error fetching data:', error);
    }
}

fetchUsersnames();

async function fetchData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json();

        const usernames = data.map(user => user.username);
        const emails = data.map(user => user.email);
        const phoneNumbers = data.map(user => user.phone);

        console.log(`Usernames: ${usernames.join(', ')}`);
        console.log(`Emails: ${emails.join(', ')}`);
        console.log(`Phone Numbers: ${phoneNumbers.join(', ')}`);
    }
    catch(error){
        console.error('Error fetching data:', error);
    }
}

fetchData();