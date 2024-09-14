// Object inside another object
// Nesting of Objects

const myobj = {
    email : "saurabh@google.com",
    fullname : {
        username : {
            firstname : "Saurabh",
            lastname : ' Yadav'
        },
        password : 222125,
    }
}

console.log(myobj.fullname.username.firstname)
console.log(myobj.fullname.username.lastname);
console.log(myobj.fullname.password);

// concatenation of obbj
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

let newobj = {obj1, obj2}
// console.log(newobj);

let newobj2 = Object.assign({}, obj1, obj2, obj4)
// console.log(newobj2);

let newobj3  = {...obj1, ...obj2, ...obj4}
// console.log(newobj3);

// Destructuring of Objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course
console.log(courseInstructor);

const{price : p} = course
console.log(p);

