const mySym = Symbol("key")

const obj = {
    name : "Saurabh",
    age : 22,
    Email : "saurabhkry22@gmail.com",
    Location : "Jaunpur",
    isLoggdIn : false,
    party : "NO",
    [mySym] : "key"
}

// console.log(obj)
console.log(obj.name);
console.log(obj["age"]);

// to access symbol data type
console.log(obj[mySym]);
// console.log(typeof obj.mySym);

obj.Email = "saurabh@google.com"
console.log(obj.Email);

// Object.freeze(obj)

obj.greeting = function(){
    console.log("Hello world");
}

obj.greeting2 = function(){
    console.log(`Hello world 2nd times for ${obj.name}`);  
}

console.log(obj.greeting)   // Anonymopus function
console.log(obj.greeting2)  // Anonymopus function

console.log(obj.greeting())  // Hello world 
console.log(obj.greeting2())


