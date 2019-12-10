$(document).ready(function(){



// this function that will validate the hour
function hourCheck() {
    //use moment.js to get current number of hours
    var currentHour = moment().hour()
    console.log(currentHour)

    // loop over the time bloack
    $(".time-block").each(function(){
        /*this will take the string from the html and turn it into an interger,
        it will then use split to leave just the number from the html id 
        */
       var timeBlock = parseInt($(this).attr("id").split("-")[1]);
        console.log(this)
        console.log(timeBlock)

        // check if it is the current time
        if (timeBlock === currentHour){
            $(this).addClass("present");
        } 
        // check to see if its an hour in the future
        else if (timeBlock > currentHour){
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        // if neither codition is met, result in the hour being in the past 
        else {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        
    })
}
hourCheck()



})