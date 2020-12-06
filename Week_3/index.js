var peopleWhoWantToSeeMadMaxFuryRoad = [
{
    name:"Mike",
    age: 12,
    gender: "male",
    pronoun: "he",
}, {
    name:"Madeline",
    age: 80, 
    gender: "female",
    pronoun: "she",
}, {  
    name:"Cheryl",
    age: 22, 
    gender: "female", 
    pronoun: "she",

}, { 
    name:"Sam",
    age: 30,
    gender: "male", 
    pronoun: "he",
}, {
    name:"Suzy",
    age:4, 
    gender: "female",
    pronoun:"she",
}
]
switch (peopleWhoWantToSeeMadMaxFuryRoad.gender) {
    case "female":
        alert ("she")
        break; 
    case "male":
        alert ("he")
        break;
}

function isOldEnough() {
    for (i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough " + peopleWhoWantToSeeMadMaxFuryRoad[i].pronoun 
            + " is good to see Mad Max Fury Road" );}
            
          
         else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough " + peopleWhoWantToSeeMadMaxFuryRoad[i].pronoun 
            + " is NOT good, dont let them in" );
         }
        
    }
   
  
}
console.log (); isOldEnough ();  


