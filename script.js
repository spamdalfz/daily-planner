
$(document).ready(function () {


  var workDayHours = [
    '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'
  ];
  // Loop through the workDayHours array and create time blocks for each hour
  for (var i = 0; i < workDayHours.length; i++) {
    var hour = workDayHours[i];
    // Create a new div element with an ID and class of "time-block"
    var timeBlock = $('<div>').attr('id', 'hour-' + (i + 9)).addClass('row time-block');
    // Create a div element with a class of "hour" and display the current hour
    var hourCol = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(hour);
    // Create a textarea element with a class of "description"
    var description = $('<textarea>').addClass('col-8 col-md-10 description').attr('rows', '3');
    // Create a button element with a class of "saveBtn"
    var saveBtn = $('<button>').addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save');
    // Create an icon element to display inside the save button
    var saveIcon = $('<i>').addClass('fas fa-save').attr('aria-hidden', 'true');

    // Append the icon element to the save button
    saveBtn.append(saveIcon);
    // Append the hour, description, and save button elements to the time block
    timeBlock.append(hourCol, description, saveBtn);
    // Append the entire time block to an element with a class of "container-lg"
    $('.container-lg').append(timeBlock);
  }

  var currentHour = dayjs().format('H');
  $('.time-block').each(function () {
    // Get the hour from the ID attribute of the time block element and convert it to a number
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    // Compare the block hour to the current hour and apply the appropriate class
    if (blockHour < currentHour) {
      $(this).addClass('past');

    } else if (blockHour == currentHour) {
      $(this).addClass('present');

    } else {
      $(this).addClass('future');
    }
  });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: WHt does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button tHt was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input tHt was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  // displays the current date in the header of the page.
  var today = dayjs()
  $('#currentDay').text(today.format('MMM D, YYYY'));

});




