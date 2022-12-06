let now = dayjs().format("MMMM D, YYYY h:mm A");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = now;
    let currentHour = dayjs().format("HH");

    //Past, present, and future functionality -
    //Compare timeblock time with current time to determine whether
    //activity is in the past, present, or future 
    $(".time-block").each(function() {
        var timeDiv = $(this).attr("id").split("-")[1];

        if (currentHour == timeDiv) {
            $(this).addClass("present");
            $(this).children(".description").addClass("present");
   
        } else if (currentHour < timeDiv) {
            $(this).removeClass("present");
            $(this).addClass("future");

        } else if (currentHour > timeDiv) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });

    //Save data to local storage
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var time = $(this).siblings(".hour").text();
        var plan = $(this).siblings(".description").val();
        localStorage.setItem(time, plan);
        console.log(time, plan);
    });

    //Retrieve data from local storage 
    $("#hour-09 .description").val(localStorage.getItem("09"));
    $("#hour-10 .description").val(localStorage.getItem("10"));
    $("#hour-11 .description").val(localStorage.getItem("11"));
    $("#hour-12 .description").val(localStorage.getItem("12"));
    $("#hour-13 .description").val(localStorage.getItem("13"));
    $("#hour-14 .description").val(localStorage.getItem("14"));
    $("#hour-15 .description").val(localStorage.getItem("15"));
    $("#hour-16 .description").val(localStorage.getItem("16"));
    $("#hour-17 .description").val(localStorage.getItem("17"));
    

    

     
    //Clear button function for clearing content and local storage
     $("#clearFieldsBtn").click(function(event) {
        event.preventDefault;
        $("textArea").val("");
        localStorage.clear();
    });