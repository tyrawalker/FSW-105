function addition ( a, b ){
    console.log ( a + b)
}

function findLargestNum(arr) {
    console.log (Math.max (...arr)); 
}

 
function isEvenOrOdd(num) {
    console.log (num % 2 ? "odd": "even"); 
}

function incrementString (str){ 
     console.log (str.length <= 20 ? str + str : str.length/2)
     
}
 
incrementString ("abcdef")