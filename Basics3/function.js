// 1.
function addTwoNumber(num1, num2){
    const result = num1 + num2
    return result
}

const ans = addTwoNumber(25, 45)
console.log("Sum :",ans);

// 2.
function loginUserMessage(username = "Raj"){
    if(!username){
        console.log("PLease enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Saurabh"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());

// 3. Spread opeartor
function calculatePrice(...num1){
    return num1; // It returns the array of price
}

const totalPrice = calculatePrice(10, 40, 56, 300)
console.log(totalPrice);

// 4. Function : Object as parameter
const user = {
    username : "Saurabh",
    price : 999
}

function handleObject(object){
    console.log(`Username is ${object.username} and price is ${object.price}`)
}
handleObject(user)

// 5.Array as parameter
let myArray = [200, 100, 400, 600]
function handleArray(array){
    console.log(array[2])
}
handleArray(myArray)
handleArray([200, 400, 500, 1000]);