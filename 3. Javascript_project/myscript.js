var firstName = prompt("First name Please: ")
var lastName = prompt("Last name Please: ")
var age = prompt("How old are you? ")
var height = prompt("What is your height? ")
var petName = prompt("What is your pet name? ")
alert("Thank you so much for the information!")


//Logic


// Four conditions
 var namecond = null;
 var agecond = null;
 var heightcond = null;
 var petcond = null;


 // NAME CONDITION
 if (firstName[0] === lastName[0]) {
     namecond = true;
 }else{
 	namecond = false;
 }


 // AGE CONDITION
 if (age > 20 && age < 30) {
      agecond = true;
 }else{
 	agecond = false;
 }

 // HEIGHT CONDITION
 if(height >= 175){
    heightcond = true;
 } else {
 	heightcond = false;
 }

 // PET NAME
 if (petName[petName.length-1] === "y") {
     petcond = true;
 }else{
 	petcond = false;
 }


//CHECK ALL CONDITION

if (namecond && agecond && heightcond && petcond) {
	console.log("Welcome SPY!");
}else{
	console.log("Nothing to see here");
}
















