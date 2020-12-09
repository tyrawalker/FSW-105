var peopleWhoWantToSeeMadMaxFuryRoad = [
{
    name:"Mike",
    age: 12,
    gender: "male",
}, {
    name:"Madeline",
    age: 80, 
    gender: "female",
}, {  
    name:"Cheryl",
    age: 22, 
    gender: "female", 
}, { 
    name:"Sam",
    age: 30,
    gender: "male", 
}, {
    name:"Suzy",
    age:4, 
    gender: "female",
}
]

function isOldEnough() {
    for (i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough ")}
            
          
         else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough ");
         }
        
    }
   
  
}

function gender () {
    for (i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "female") {
        console.log ("she")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "male"){
        console.log ("he")
    }}
}

function canGo () {
    for (i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if ( peopleWhoWantToSeeMadMaxFuryRoad[i].age >=18) {
            console.log ("'s good to go the can see the movie")
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i] < 18) {
            console.log ("'s not good to go, dont let them in")
        }
    }
}
function allTogetherNow (){ console.log ( );isOldEnough + gender+ canGo}; 

console.log (); allTogetherNow ();


