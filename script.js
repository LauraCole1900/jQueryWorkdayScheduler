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
  var cDay = document.getElementById("currentDay");
  // var row = $("<main>");

  var timeBlock = [
    {
      label: "9:00 am",
      value: 0900,
      userInputName: "",
      userInputDesc: "",
    },
    {
      label: "10:00 am",
      value: 1000,
      userInputName: "",
      userInputDesc: "",
    },
    {
      label: "11:00 am",
      value: 1100,
      userInputName: "",
      userInputDesc: "",
    },
    {
      label: "12:00 pm",
      value: 1200,
      userInputName: "",
      userInputDesc: "",
    },
    {
      label: "1:00 pm",
      value: 1300,
      userInputName: "",
      userInputDesc: "",
    },
    {
      label: "2:00 pm",
      value: 1400,
      userInputName: "",
      userInputDesc: "",
    },
    {
      label: "3:00 pm",
      value: 1500,
      userInputName: "",
      userInputDesc: "",
    },
    {
      label: "4:00 pm",
      value: 1600,
      userInputName: "",
      userInputDesc: "",
    },
    {
      label: "5:00 pm",
      value: 1700,
      userInputName: "",
      userInputDesc: "",
    },
  ]


  // functions

  // "display date & time" function
  // grab currentDay
  // attach date & time there
  // call buildTimeBlocks()
  function currentDay() {

  }


  // build the page
  // forEach loop
  // create 9 timeblocks
  // define timeblocks
  // attach timeblocks to .container
  // call labelTimeBlocks()

  // create rows
  $(timeBlock).each(function (i) {
    var row = $("<div>");
    if (i < $(timeBlock).length) {
      row
        .addClass("row")
      $(".container").append(row);
    }
  });

  // create columns
  // label hour blocks
  $("div.row").each(function (i) {
    var labelCol = $("<div>");
    var inputCol = $("<div>");
    labelCol
      .addClass("col-2 hour")
    .text(timeBlock[i].label)
    inputCol
      .addClass("col-10 time-block")
    $(this).append(labelCol);
    $(this).append(inputCol);
  })


  // label timeblocks 9am-5pm
  // labels in own column on left side?
  // connect timeblocks to current time
  // call colorTimeBlocks()
  function labelTimeBlocks() {

  }


  // compare timeblock label to current time
  // .past, .present, .future classes change dynamically
  function colorTimeBlocks() {

  }


  // put event listener or event delegation on each timeblock
  // timeblocks object, so one event listener for all?
  // put it on time-block class?
  // call userForm()


  // "create user input form" function
  // date field?
  // time field - determined by which timeblock is clicked on
  // event name field
  // event description field
  // save button
  // event listener on save button
  // call saveInfo()
  function userForm() {

  }

  // "save info" function
  // when save button on user input form is clicked, data goes to local storage
  // data persists through page reload
  function saveInfo() {

  }

  // "populate scheduler" function
  // pull data from local storage
  // compare date in data to date in scheduler
  // compare time in data to time in scheduler
  // find appropriate timeblock
  // populate data to that timeblock

});