// provided in the html
// header class jumbotron
// h1 class display-3
// p id currentDay class lead
// div class container

// provided in the css
// body tag
// textarea tag
// jumbotron class
// description class
// time-block class
// row class
// hour class
// past class
// present class
// future class
// saveBtn class
// saveBtn i:hover class -- I don't know how this works yet

// from README
// You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time.


// display current date at top of planner, in jumbotron
// display current time at top of planner, in jumbotron?
// create timeblocks for standard business hours
// link timeblocks to current date & time
// make timeblocks change color based on future, present and past time
// user has ability to scroll through dates & times?
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



// global variables
var cDay = document.getElementById("currentDay");



// functions

// "display date & time" function
// grab currentDay
// attach date & time there

// "create timeblocks" function
// attach 11 timeblocks to div with class "container"
// label timeblocks 8am-6pm
// labels in own column on left side?

// "color timeblocks" function
// link timeblocks to current time
// color timeblocks in the future green
// color present timeblock white
// color past timeblocks red

// put event listener or event delegation on each timeblock
// timeblocks object, so one event listener for all?
// put it on time-block class?

// "create user input form" function
// date field
// time field
// event name field
// event description field
// save button
// event listener on save button?

// "save info" function
// when save button on user input form is clicked, data goes to local storage
// data persists through page reload

// "populate scheduler" function
// pull data from local storage
// compare date in data to date in scheduler
// compare time in data to time in scheduler
// find appropriate timeblock
// populate data to that timeblock