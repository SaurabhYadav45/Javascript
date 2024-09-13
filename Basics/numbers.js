
//  <<<----------- Methods of Numbers----------->>>>>

//        1.Number.isFinite()
//        2.Number.isInteger()
//        3.Number.parseFloat()
//        4.Number.parseInt()
//        5.Number.toString()
//        6.num.toFixed()
//        7.num.toPrecision()
//        8.num.toLocaleString()
//        9.num.toExponential()
//        10.num.valueOf()

// 1. Constructor  : The constructor property returns the function that created the Number prototype.
// For JavaScript numbers the constructor property returns:
// function Number() { [native code] }


// 2. Number.isFinite() :
// The Number.isFinite() method returns true if a number is a finite number.
// Infinite (not finite) numbers are Infinity, -Infinity, or NaN
let b = 12
console.log(isFinite(b));
console.log(Number.isFinite("12345"))
console.log(Number.isFinite(12345))

// 3. Number.isInteger() : 
// The Number.isInteger() method returns true if a value is an integer of the datatype Number.
console.log(Number.isInteger(764649))
console.log(Number.isInteger('abg'))

// 4. toString(radix):
// radix / base -> optional

// 5. toPrecision():
// The toPrecision(length) method formats a number to a specified length.
let num = 13.3714;
console.log(num.toPrecision(2));
console.log(num.toPrecision(3));
console.log(num.toPrecision(10));

// 6.toLocaleString()
// The toLocaleString() returns a number as a string, using local language format.
 num = 10000000
let x = num.toLocaleString()
let y = num.toLocaleString("en-IN")
console.log(x)
console.log(y)

// 7. num.toFixed(x)
// x -> optional
// The toFixed() method converts a number to a string.
// The toFixed() method rounds the string to a specified number of decimals.

