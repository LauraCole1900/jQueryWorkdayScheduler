// provided in the html
// header class jumbotron
// h1 class display-3
// p id currentDay class lead
// div class container

// provided in the css
// body tag
// textarea tag
// .jumbotron
// .description
// .time-block
// .row
// .hour
// .past
// .present
// .future
// .saveBtn
// saveBtn i:hover class -- I don't know how this works yet

// from README
// You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time.


// display current date at top of planner, in jumbotron
// display current time at top of planner, in jumbotron?
// create timeblocks for standard business hours
// link timeblocks to current date & time
// make timeblocks change color based on future, present and past time
// user has ability to scroll through dates & times? - not necessary
// create user input form

// user input needs:
// date of event
// time of event
// name of event
// description of event
// save button that saves to local storage

// user input form activated when user clicks on that timeblock: event listener

// user input once saved must then be placed in the calendar at the set time

// saved events persist when page is refreshed


$(document).ready(function () {


  // global variables

  var timeBlock = [
    {
      label: "9:00 am",
      tValue: "09:00",
      userInput: "",
    },
    {
      label: "10:00 am",
      tValue: "10:00",
      userInput: "",
    },
    {
      label: "11:00 am",
      tValue: "11:00",
      userInput: "",
    },
    {
      label: "12:00 pm",
      tValue: "12:00",
      userInput: "",
    },
    {
      label: "1:00 pm",
      tValue: "13:00",
      userInput: "",
    },
    {
      label: "2:00 pm",
      tValue: "14:00",
      userInput: "",
    },
    {
      label: "3:00 pm",
      tValue: "15:00",
      userInput: "",
    },
    {
      label: "4:00 pm",
      tValue: "16:00",
      userInputDesc: "",
    },
    {
      label: "5:00 pm",
      tValue: "17:00",
      userInput: "",
    },
  ]

  i = 0;
  var timeValue = timeBlock[i].tValue;
  var inputDesc = $("<textarea>").text(timeBlock.userInput);


  // functions

  // "display date & time" function
  // attach date & time there
  $("#currentDay").text(dayjs().format("ddd, MMM DD, YYYY"));


  // create rows
  // attach rows to .container
  $(timeBlock).each(function () {
    var row = $("<div>");
    if (i < $(timeBlock).length) {
      row
        .addClass("row")
      $(".container").append(row);
    }
  });

  // create columns
  // label hour blocks
  // class hour blocks and time-blocks
  // append columns to rows
  $("div.row").each(function () {
    var labelCol = $("<div>");
    var inputCol = $("<div>");

    labelCol
      .addClass("col-2 hour")
      .text(timeBlock[i].label)
    inputCol
      .addClass("col-10 time-block")
      .attr("id", timeValue)
    $(this).append(labelCol);
    $(this).append(inputCol);


    // connect timeblocks to current time
    // set time-block classes based on whether they are earlier, during, or later than the current time
    var isFuture = $(dayjs().isBefore((timeValue), "hour"));
    // var isSame = $(dayjs().isSame(".data-time", "hour"));
    // var isPast = $(dayjs().isAfter(".data-time", "hour"));
    if (isFuture === true) {
      inputCol.addClass("future");
      // } else if (isSame === true) {
      //   inputCol.addClass("present");
      // } else if (isPast === true) {
      //   inputCol.addClass("past");
      // }
    }
  })

  // create save buttons
  // class and attribute save buttons
  // append save buttons to time-blocks
  $("div.time-block").each(function () {
    var saveCol = $("<button>");
    saveCol
      .addClass("col-1 saveBtn float-right")
      .text("Save")
      .attr("id", timeValue)
    $(this).append(saveCol);
  });

  // "create user input form" function
  // event listener on time-blocks
  // event description field
  // turns off event listener on time-blocks

  // .time-block event listener
  $(".time-block").on("click", function () {
    inputDesc
      .addClass("description")
      .addClass("float-left")
    $(this).append(inputDesc).unbind("click");
  });


  // saveBtn event listener
  // puts data in local storage
  // data persists through page reload
  // turn event listener back on for time-blocks
  $(".saveBtn").on("click", function () {
    var savedInput = $(this).siblings("textarea").val()
    var timeInput = $(this).parent().attr("id")
    alert(timeInput);
    localStorage.setItem(timeInput, savedInput);

    $(".time-block").on("click", function () {
      inputDesc
      .addClass("description")
      .addClass("float-left")
    $(this).append(inputDesc).unbind("click");
    })
  });


  // "populate scheduler" function
  // pull data from local storage
  // compare time in data to time in scheduler
  // find appropriate timeblock
  // populate data to that timeblock

});