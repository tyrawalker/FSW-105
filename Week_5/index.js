var fruits = ["banana", "apple", "orange", "watermelon"]; 
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//template set up for next week, im nearly caught up and will use the next two weeks off to complete everything i can and resubmit all assignments not a 100%
 function arrExercise () {
     vegetables.pop (); 
     //console.log (vegetables);
     fruits.shift(); 
     //console.log (fruits);
      var indexOfOrange = fruits.indexOf ("orange"); 
     // console.log (indexOfOrange);
     fruits.push (1);
    // console.log (fruits);
     //console.log (vegetables.length);
     vegetables.push (3);
     //console.log (vegetables); 
     var foods = fruits.concat(vegetables);
    //console.log (foods);
    foods.splice (4,2);
    //console.log (foods);
    foods.reverse ()
    //console.log (foods);
     var string = foods.toString ();
     console.log (string);

        
     
 }

 arrExercise();  

//1. Remove the last item from the vegetable array.//

//2. Remove the first item from the fruit array.//

//3. Find the index of "orange."//

//4. Add that number to the end of the fruit array.//

//5.Use the length property to find the length of the vegetable array.//

//6. Add that number to the end of the vegetable array.//

//7. Put the two arrays together into one array. Fruit first. Call the new Array "food".//

//8. Remove 2 elements from your new array starting at index 4 with one method.//

//9. Reverse your array.//

//10. Turn the array into a string and return it.

//final result will be 3, pepper, 1, watermelon, orange, apple