var Shopper = {
    firstName: "Peter", 
    lastName: "Piper", 
    "age":20, 
    location: "Nursery Rhymes", 
    displayInfo:function() {
        console.log(`${Shopper.firstName} ${Shopper.lastName} from the ${Shopper.location} picked  ${Cart.quantity} of ${this.favFood} of ${Cart.items}`)
    }
}
 var Cart = {
     quantity: "a peck",
     items:["pickled", "peppers"],
      }

 Shopper.displayInfo()
 





 