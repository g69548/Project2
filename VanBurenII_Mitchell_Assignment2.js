//alert("JavaScript works!");

/*
 * Mitchell VanBurenII
 * SDI Assignment 2
 * 1303
 *
 * This code will be just a more indepth and none static way to lower your car with
 * the brand coilovers and the amount that is preffered by the mechanic and why it is
 * preffered.  */
//****Variables****
var mechanic = " Mitchell";
var toolow = true;
var stockheight = 3.5;
var measurement = "inches";
var brand1 = "Racelands";
var brand2 = "FK";



//****Procedure****
console.log("Hey, good to see you today! My name is" + mechanic + ",how may i help you out!?");
console.log("Ok,Ok, i see that you are wanting to lower this. Lets check where the height at right now.");
 
 if(stockheight > 1.5){
 
    console.log("We need to drop this a good bit" );
    console.log("You are sitting at about " + stockheight + " " + measurement);
    
 }
 else{
    console.log("Haha you dont need me, your just fine. Anything else i can do for ya!?");
    }
    
//****Boolean Function****

console.log("So lets think anout this, we have 2 brands we sale.");



var coilchoice = function (Brand) {
    
    var coil = Brand;
    var choice = true;
    if (choice == true ) {
    
    console.log ("Yes! " + Brand + " Would be the perfect choice because of the drop!");
    
    return;

    }  

}

coilchoice ("RaceLands");

console.log("Now that we have made our decision lets drop it!");


//****Number Function****

var prefHeight = 1.0;
var Racelands = 3.0;
console.log("Now we will drop this in increments just to be safe.");

var height = function (lowerIt) {
    
    for (stock = 3.5; stock > lowerIt; stock -= 0.5) {
        var remaining = stock - lowerIt;
        
       if (remaining > 0.5) {
       console.log(remaining + " Remaining!");
       console.log("Lower!");
    }
    else{
        console.log("We Are THERE! CONGRATS!");
    }
    

    
}
}
height (0.5)


