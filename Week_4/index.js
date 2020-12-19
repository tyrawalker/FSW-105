//Confused on if you want us to use functions or string methods for this assignemnt
//1. Make a function that will return any given string into all caps followed by the same string all lowercase. 
function toUpperCaseAndLowerCase (str) {
console.log (str.toUpperCase () + str.toLowerCase())
}
toUpperCaseAndLowerCase ("hello")

//2. Make a function that returns a number half the length and rounded down. You'll need to use Math.floor()
function findMiddleIndexOf (str) {
    console.log (Math.floor (str.length/2))
}
findMiddleIndexOf ("hello");
findMiddleIndexOf ("hellow Word");

//3. Make a function that uses slice() (Links to an external site.) and the other functions you've written to return the first half of the string
function returnFirstHalf (str) {
    console.log (str.slice(0, str.length/2))
}
returnFirstHalf ("hello");
returnFirstHalf ("hello world");

//4. Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
function capitalizeAndLowerCase (str) {
    console.log (str.slice (0,str.length/2).toUpperCase() + str.slice (str.length/2, str.length).toLowerCase())
}
capitalizeAndLowerCase ("Hello"); 
capitalizeAndLowerCase ("hello world");