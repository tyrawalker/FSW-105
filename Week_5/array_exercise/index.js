
//section A
//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function greaterThanFive (arr) 
{
 const result = arr.filter(function(num){
     if (num >= 5)
         return num;
 });
 console.log (result);
}
greaterThanFive ([3, 6, 8, 2])

// 2) Given an array of numbers, return a new array that only includes the even numbers.
function onlyEvens (arr) {
    const result1 = arr.filter (function(num){
        if (num % 2 === 0)
        return num;
    });
    console.log(result1);
}
onlyEvens([3, 6, 8, 2])

//section B
//1) Make an array of numbers that are doubles of the first array
function doubleUp (arr) {
   const result2 = arr.map (function(num){
     return num + num
    });
console.log(result2);    
}
doubleUp([2, 5, 100])

//2) Take an array of numbers and make them strings
function returnStrings (arr) {
    const result3 = arr.map (function(num){
      return num.toString();
    });
console.log(result3);    
}
returnStrings([2, 5, 100]);

//3) Capitalize each of an array of names
function capitalizeNames (arr) {
    const result4 = arr.map (function(str){
       return str.toUpperCase();
    });
console.log (result4);    
}
capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);

//section C
//1) Turn an array of numbers into a total of all the numbers
function summation (arr) {
    const result5 = arr.reduce (function (accumulator, current){
        return accumulator + current;
    });
console.log (result5);
}
summation([1, 2, 3]);

//2) Turn an array of numbers into a long string of all those numbers.
function numToString (arr){
    const result6 = arr.reduce (function (accumulator, num){
        return accumulator + num.toString();
    }); 
    console.log (result6);
}
numToString([1, 2, 3]);

// 3) Turn an array of voter objects into a count of how many people voted
function whoVoted (arr){
    const result7 = arr.reduce (function(accumulator, current){
                if (current.voted = true){
                    return accumulator + current.voted
                }
        }
     );
    console.log (result7);
}
whoVoted([
    {name:"Bob", age: 30, voted: true},
    {name:"Jake", age:32 , voted: true},
    {name:"Kate", age:25, voted: false},
    {name:"Sam", age:20, voted:false},
    {name:"Phil", age: 21, voted: true},
    {name:"Ed", age: 55, voted: true}, 
    {name:"Tammy", age: 54, voted: true}, 
    {name:"Marry", age:31, voted:false}, 
    {name: "Becky", age:43, voted: false}, 
    {name:"Joey", age:41 , voted:true},
    {name:"Jeff", age:30 , voted: true},
    {name:"Zack", age:19 , voted:false}, 
])
S
//section D
//1) Sort an array from smallest number to largest
function smallToLarge(arr){
    const result8 = arr.sort(function(a,b){
       return a-b
    })
    console.log (result8)
}
smallToLarge ([1, 3, 5, 2, 90, 20])

//2) Sort an array from largest number to smallest
function largeToSmall (arr){
    const result9 = arr.sort (function (a,b){
        return b-a
    })
    console.log (result9)
}
largeToSmall ([1, 3, 5, 2, 90, 20])

//3) Sort an array from shortest string to longest
function shortToLong (arr) {
    const result10 = arr.sort (function (a, b){
        return a.length - b.length
    })
    console.log (result10)
}
shortToLong (["dog", "wolf", "by", "family", "eaten"])


//Extra Credit) Sort an array alphabetically
function alphabetical (arr){
    const restult11 = arr.sort ()
    console.log (restult11)
}
alphabetical(["dog", "wolf", "by", "family", "eaten"])

