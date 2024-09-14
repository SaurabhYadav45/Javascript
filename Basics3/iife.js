// IIFE : Immediately invoked function expression

(function chai(){
    // Named IIFE
    console.log("DB Connected")
})();

((name) => {
    console.log(`DB connected 2 ${name}`)
})("Saurabh");