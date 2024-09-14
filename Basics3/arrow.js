
const user = {
    username : "Saurabh",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
user.username = "Sandeep"
// user.welcomeMessage()

// console.log(this)


  //                 <----- ARROW FUNCTION------>

// In Arrow Functions, the "this" keyword represents the object that owns the function, no matter who calls the function

// In regular functions the this keyword represented the object that called the function, which could be the window, a button or whatever.

function chai(){
    username = "Hitesh"
    console.log(this.username);
    // console.log(this);
}
chai();

// const chai = function(){
//     username = "Saurabh"
//     console.log(this.username)
// }

const chai1 = () =>{
    username = "Saurabh"
    console.log(this.username)
}

// chai1();


// const sum = (num1, num2)=>{
//     return num1+num2;
// }

const sum = (num1, num2) => num1 + num2
console.log(sum(4,5))
const sum1 = (num1, num2) => (num1 + num2)
console.log(sum1(8,9));

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4))
