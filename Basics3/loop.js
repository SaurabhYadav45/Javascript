//                             <------ For Of LOOP -------->

// Iterate over Array, strings and Map but not on object
// ["", "", ""] OR [{}, {}, {}]

const arr = ["Saurabh", "Sandeep", "Vishal", "Dileep", "Pankaj"]
for (const item of arr) {
    // console.log(item)
}

// Strings
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// On Map
const map = new Map();
map.set("Animal" , "Dog")
map.set("Fruit", "Apple")
map.set("Bird", "Parrot")
map.set("Game", "Cricket")

// console.log(map)
for(const [key, value] of map){
    // console.log(key, "->", value);
}

// Objects : Do not work
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }


//                             <------ For In LOOP -------->

// It mainly used to iterate over objects and can't iterate over map

// Objects
const myobj = {
    cpp : "C++",
    java : "Java",
    py : "Python",
    rb : "Ruby",
}

for (const key in myobj) {
    // console.log(key)
    // console.log(`key : ${key} and value is : ${myobj[key]}`)
}

// Array
const arr1 = ['1', '2', '3', '4', '5']
for(const num in arr1){
    // console.log(num);           It prints : 0, 1, 2, 3, 4
    // console.log(arr1[num]);        //It prints 1, 2, 3, 4, 5 
}


//                             <------ For Each LOOP -------->

const coding = ["js", "ruby", "java", "python", "cpp"]

// 1.
coding.forEach(function(val) {
    // console.log(val)
})

// 2.
coding.forEach((item) => {
    // console.log(item)
})

// 3.
function print(item){
    // console.log(item)
}
coding .forEach(print)


// 4.
coding.forEach((item, index, array) => {
    // console.log(item, index, array);
})


// 5. Array of Object
const arr2 = [
    {
        language : "javascript",
        languageFileName : "js"
    },
    {
        language : "java",
        languageFileName : "java"
    },
    {
        language : "python",
        languageFileName : "py"
    }
]

arr2.forEach((item) => {
    console.log(item.language)
    console.log(item.languageFileName)
})