const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNum = myNumbers.map( (num) => num + 10)
console.log(myNum);

// const newNums = myNumbers.map( (num) => { return num + 10})

const newNums = myNumbers
                .map((num) => num*12)
                .map((num) => num + 2)
                .filter((num) => num > 20)

console.log(newNums)



