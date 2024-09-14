// Var : Global scope
// Const and Let : local scope

console.log(addOne(5))
function addOne(num){
    return num+1;
}

// console.log(addTwo(5)) :- Error 
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(5))