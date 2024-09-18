// The promise constructor takes only one argument which is a callback function
// The callback function takes two arguments, resolve and reject
// Perform operations inside the callback function and if everything went well then call resolve.
// If desired operations do not go well then call reject.

//  Waiting,  Resolved, Rejected


// 1.
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

// 2.
const myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task completed")
        resolve()
    }, 1000)
})

myPromise.then(function(){
    console.log('task 1 consumed')
})

// 3.
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Saurabh", password : "12345"})
    }, 1000)
})
promise3.then(function(user){
    console.log(user)
})

// 4. Promise Chaining
const promise4 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let sam = true;
        if(sam){
            resolve({username : "Saurabh", password : "12345"})
        }
        else{
            reject('Error : Something went wrong')
        }
    }, 1000);
})

promise4.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => {
    console.log("Finally block always executed");
    
})

// 5. Using Async nd Await keyword
const promise5 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let sam = true;
        if(sam){
            resolve({username : "Saurabh", password : "12345"})
        }
        else{
            reject('Error : Something went wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()


// 6. 
// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUser();

//  7.
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("ERROR",error);
})