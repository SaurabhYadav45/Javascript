const arr = [1, 2, 3, 4, 5]
const arr2 = ["rat", "cat", "mat"]
const arr3 = ["apple", "mango",23, true, 76, false]

// console.log(arr);
// console.log(arr2);
// console.log(arr3);

//  1. Concatenation
let newarr = arr.concat(arr2, arr3)
// console.log(newarr);

// Push() and Pop()
arr.push(arr2)
arr.push(1000)
// console.log(arr);
arr.pop();
arr.pop();
// console.log(arr)

//  Unshift() : It adds specified element at the starting of array and 
//  Shift()   : It removes element from starting of array
arr2.unshift(0)
// console.log(arr2);
arr2.shift();
// console.log(arr2)

// Include()
// console.log(arr.includes(9))
// console.log(arr.includes(5))
// console.log(arr.indexOf(4))

//  Join() : It converts array into strings
newarr = arr.join()
// console.log(arr)
// console.log(newarr);
// console.log(typeof (newarr))
// console.log(typeof newarr)

// Slice() and Splice() 
// Slice() : It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
newarr = myArr.slice(2,6)
// console.log("original :",myArr);
// console.log("New : ",newarr);

// Splice(): Unlike the slice() method, the splice() method will change the contents of the original array. The splice() method is used to add or remove elements of an existing array and the return value will be the removed from the array.

// splice(start, optional delete count, optional items to add)

let newarr2 = myArr.splice(2,6)
// console.log("origibnal :",myArr);
// console.log("New :",newarr2);



// Spread operator :
const heros1 = [1, 2,  4, 5]
const heros2 = [22, 33, 44, 55]
let totalHero = [...heros1, ...heros2]
console.log(totalHero);

// Flat():
let another_heroes = [12, 32, 45, ["mew", "cow"], [88, [32, "dog", true]]]
let flatHeroes = another_heroes.flat(Infinity)
console.log(flatHeroes);

console.log(Array.from("Saurabh"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));      