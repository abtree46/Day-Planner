$(document).ready(function () {
    //THEN the current day is displayed at the top of the calendar
    //this isn't working 
    // function timeFormatter(dateTime){<- was attempt at getting the current time displayed as well.
    //    var date = new Date(dateTime);
    //    if (date.getHours()>=12){
    //       var hour = parseInt(date.getHours()) - 12;
    //        var amPm = "PM";
    //     } else {
    //         var hour = date.getHours(); 
    //         var amPm = "AM";
    //     }
    //     var time = hour + ":" + date.getMinutes() + " " + amPm;
    //     console.log(time);
    //     return time;
    //$("#today").text(moment);
    //console.log(moment);
    // defines time and info to be saved.
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        var info = $(this).siblings(".todo").val();


        //THEN the text for that event is saved in local storage
        localStorage.setItem(time, info);
    })
    // then retrieve it
    $("#9 .todo").val(localStorage.getItem("hour9"));

    $("#10 .todo").val(localStorage.getItem("hour10"));

    $("#11 .todo").val(localStorage.getItem("hour11"));

    $("#12 .todo").val(localStorage.getItem("hour12"));

    $("#1 .todo").val(localStorage.getItem("hour1"));

    $("#2 .todo").val(localStorage.getItem("hour2"));

    $("#3 .todo").val(localStorage.getItem("hour3"));

    $("#4 .todo").val(localStorage.getItem("hour4"));

    $("#5 .todo").val(localStorage.getItem("hour5"));


    function hourTracker() {
        //to get time
        var currentHour = moment().hour();


        $(".time-block").each(function () {
            var block = parseInt($(this).attr("id").split("hour")[1]);

            //to change from one hour to the next
            if (block < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (block === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
});

