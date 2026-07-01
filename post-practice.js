async function AddPost(){
    try{
       const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: "Learning MERN",
                body: "POST request practice",
                userId: 1
            })
        });

        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        console.log('Post added successfully:', response);
        // const data = await response.json();
        // console.log('Post added successfully:', data);
    } catch (error) {
        console.error('Error adding post:', error);
    }
}

AddPost();

fetch('https://jsonplaceholder.typicode.com/posts', {
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'},
    body : JSON.stringify({
        title : "Learning MERN",
        body : "POST request practice",
        userId : 1
    })
})
.then(response => {
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    console.log('Post added successfully:', response);
})
.catch(error => {
    console.error('Error adding post:', error);
});

async function AddMe(){
    try{
        const me = {
            name : "John Doe",
            semster : 5,
            university : "XYZ University",
            skills : ["JavaScript", "React", "Node.js"]
        };

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(me)
        });

        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        console.log('My Profile : ', me);
        console.log('Added Post : ', data);
    } catch (error) {
        console.error('Error adding post:', error);
    }
}

AddMe();