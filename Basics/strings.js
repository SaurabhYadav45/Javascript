
//1. String Slice() Method
//slice(startIndex, endIndex)
// Negative indexing possible
let a = "Mathematics"

let b = a.slice(0,5)
let c= a.slice(5,11)
let d = a.slice(-5, -1)

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// 2. Substring(startIndex, endIndex)
// Negative indexing not possible

// 3. Substr(startIndex, length)
// negative indexing possible
let x  = "GeeksforGeeks"
let y = a.substr(0,10)
console.log(y);

// 4.Replace(value1, value2)
let v = x.replace('e', 'z')
console.log(v)

// 5. ReplaceAll()

let w = x.replaceAll('e', 'z')
console.log(w)

// 6.toUpperCase()
console.log(w.toUpperCase())

// 7. toLowerCase()
console.log(w.toLowerCase())

// 8.Concatenate : concat()

let str = "abcde"
let str1 = "fgh"
let str2 = "ijk"

let str3 = str.concat(str1, str2)
console.log(str3)

// 9.trim() : to remove the starting and ending whilte spaces
let gfg = '      GFG'
let newGfg = gfg.trim()
console.log(gfg);
console.log(newGfg);

// 10. trimStart() : It removes the starting whilespace
// 11. trimEnd()    : It removes the ending whitespace

// 12. charAt() :   It returns the character at the specified index. String in JavaScript has zero-based indexing.

// 13. split()  : The JavaScript split() method divides a string into an array of substrings based on a specified separator.
// split(seprator, limit)
let str5 = 'It iS a 5r&amp;e@@t Day.'
let str6 = str5.split(" ")
let str7 = str5.split("")
console.log(str6)
console.log(str7)
console.log(str6, 3)
console.log(str7, 5)


// some more method

// 14. at() : Find the character at the specified index.

// 15. include(search value, startposition)

// 16. indexOf()