function addition ( a, b ){
    console.log ( a + b)
}

addition (2,3)

function findLargestNum(arr) {
    console.log (Math.max (...arr)); 
}

findLargestNum ([3,5,8,9])
 
function isEvenOrOdd(num) {
    console.log (num % 2 ? "odd": "even"); 
}

isEvenOrOdd (3)

function incrementString (str){ 
     console.log (str.length <= 20 ? str + str : str.length/2)
     
}
 
incrementString ("abcdef")