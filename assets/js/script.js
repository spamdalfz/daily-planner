
$(document).ready(function () {

  var workDayHours = [
    '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'
  ];
  // loop through the workDayHours array and create time blocks for each hour
  for (var i = 0; i < workDayHours.length; i++) {
    var hour = workDayHours[i];
    // create a new div element with an ID and class of "time-block"
    var timeBlock = $('<div>').attr('id', 'hour-' + (i + 9)).addClass('row time-block');
    // create a div element with a class of "hour" and display the current hour
    var hourCol = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(hour);
    // create a textarea element with a class of "description"
    var description = $('<textarea>').addClass('col-8 col-md-10 description').attr('rows', '3');
    // create a button element with a class of "saveBtn"
    var saveBtn = $('<button>').addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save');
    // create an icon element to display inside the save button
    var saveIcon = $('<i>').addClass('fas fa-save').attr('aria-hidden', 'true');

    // append the icon element to the save button
    saveBtn.append(saveIcon);
    // append the hour, description, and save button elements to the time block
    timeBlock.append(hourCol, description, saveBtn);
    // append the entire time block to an element with a class of "container-lg"
    $('.container-lg').append(timeBlock);
  }

  var currentHour = dayjs().format('H');
  $('.time-block').each(function () {
    // get the hour from the ID attribute of the time block element and convert it to a number
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    // compare the block hour to the current hour and apply the appropriate class
    if (blockHour < currentHour) {
      $(this).addClass('past');

    } else if (blockHour == currentHour) {
      $(this).addClass('present');

    } else {
      $(this).addClass('future');
    }
  });

  // event listener for each save button to store the user input in local storage
  $('.saveBtn').each(function () {

    $(this).on('click', function () {
      // Get input text and hour id
      var inputText = $(this).siblings('.description').val();
      var hour = $(this).parent().attr('id');

      // store input text in local storage as long as its not empty
      if (inputText.trim() !== '') {
        localStorage.setItem(hour, inputText);
        //notifies user that the save was successful
        alert('Event saved.');
      }
    });
  });

  // get saved user input from localStorage
  $('.time-block').each(function () {
    var hour = $(this).attr('id');
    var savedInput = localStorage.getItem(hour);

    if (savedInput) {
      $(this).find('.description').val(savedInput);
    }
  });

  // displays the current date in the header of the page.
  var today = dayjs()
  $('#currentDay').text(today.format('MMM D, YYYY'));

});