$(document).ready(function(){
// On click event that allows user to save note/data
$(".savsBtn").on("click", function(){
    // gets value from input area
    var value = $(this).siblings(".description").val();
    
    var time = $(this).parent().attr("id");

    // This save info to localStorage
    localStorage.setItem(time, value);
})


// this function that will validate the hour
function hourCheck() {
    //use moment.js to get current number of hours
    var currentHour = moment().format("h a")
    console.log("The current hour is", currentHour)

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

// this will check to see if the current time needs to be updated ever 15 seconds
var interval = setInterval(hourCheck, 15000)

 //this will load any save notes/data that was store in localStorage
 $("#hour-9 .description").val(localStorage.getItem("hour-9"));
 $("#hour-10 .description").val(localStorage.getItem("hour-10"));
 $("#hour-11 .description").val(localStorage.getItem("hour-11"));
 $("#hour-12 .description").val(localStorage.getItem("hour-12"));
 $("#hour-13 .description").val(localStorage.getItem("hour-13"));
 $("#hour-14 .description").val(localStorage.getItem("hour-14"));
 $("#hour-15 .description").val(localStorage.getItem("hour-15"));
 $("#hour-16 .description").val(localStorage.getItem("hour-16"));
 $("#hour-17 .description").val(localStorage.getItem("hour-17"));

 // this uses moment.js to display current day on page
 $("#currentDay").text(moment().format("dddd, MMMM Do"));


})