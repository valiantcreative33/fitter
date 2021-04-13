//dispaly current day at the top of the document
var currentDate = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
$("#currentDay").html(currentDate);

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //when user click save, info is saved into localStorage
        localStorage.setItem(time, task); 
    })
    
    //keep information after user refrshes page
    //Retrieve time from the DOM
    //Use that to retrieve the task from local storage
    //Update task in the DOM

    $(".time-block").each(function(){

        var task = $(this).children(".description").val();
        var time = $(this).attr("id");

        var retrieveTime = localStorage.getItem(time);

        console.log('task',task);
        console.log('time',time);

        if(retrieveTime){
            console.log('retrieve time', retrieveTime)   
            time = $(this).children(".description").val(retrieveTime); 
        }     
    });


//make past times grey, future green, present red
    var currentTime = moment().hour();
    console.log(currentTime)
    
    if (currentTime > 9) {
        $(".9").addClass("past")
    } else if (currentTime === 9) {
        $(".9").addClass("present")
    } else if (currentTime < 9) {
        $(".9").addClass("future")
    }

    if (currentTime > 10) {
        $(".10").addClass("past")
    } else if (currentTime === 10) {
        $(".10").addClass("present")
    } else if (currentTime < 10) {
        $(".10").addClass("future")
    }

    if (currentTime > 11) {
        $(".11").addClass("past")
    } else if (currentTime === 11) {
        $(".11").addClass("present")
    } else if (currentTime < 11) {
        $(".11").addClass("future")
    }

    if (currentTime > 12) {
        $(".12").addClass("past")
    } else if (currentTime === 12) {
        $(".12").addClass("present")
    } else if (currentTime < 12) {
        $(".12").addClass("future")
    }

    if (currentTime > 13) {
        $(".13").addClass("past")
    } else if (currentTime === 13) {
        $(".13").addClass("present")
    } else if (currentTime < 13) {
        $(".13").addClass("future")
    }

    if (currentTime > 14) {
        $(".14").addClass("past")
    } else if (currentTime === 14) {
        $(".14").addClass("present")
    } else if (currentTime < 14) {
        $(".14").addClass("future")
    }

    if (currentTime > 15) {
        $(".15").addClass("past")
    } else if (currentTime === 15) {
        $(".15").addClass("present")
    } else if (currentTime < 15) {
        $(".15").addClass("future")
    }

    if (currentTime > 16) {
        $(".16").addClass("past")
    } else if (currentTime === 16) {
        $(".16").addClass("present")
    } else if (currentTime < 16) {
        $(".16").addClass("future")
    }

    if (currentTime > 17) {
        $(".17").addClass("past")
    } else if (currentTime === 17) {
        $(".17").addClass("present")
    } else if (currentTime < 17) {
        $(".17").addClass("future")
    }

});
