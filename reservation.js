function submitForm() {
  var nameInput = document.getElementById('name').value;
  var phoneInput = document.getElementById('phone').value;
  var dateInput = document.getElementById('date').value;
  var timeInput = document.getElementById('time').value;
  var numberOfPeopleInput = document.getElementById('numberOfPeople').value;
  var errorMessage = document.getElementById('errorMessage');

  errorMessage.innerText = "";
  
  if (!nameInput || !phoneInput || !dateInput || !timeInput || !numberOfPeopleInput) {
    errorMessage.innerText = "Please fill out all fields";
    return;
  }
  
  if (phoneInput.length !== 10 || isNaN(phoneInput)) {
    errorMessage.innerText = "Phone number must be a 10-digit number";
    return;
  }

  var currentTime = new Date();
  var selectedTime = new Date(dateInput + " " + timeInput);
  if (selectedTime < currentTime) {
    errorMessage.innerText = "Booking Unavailable";
    return;
  }
  errorMessage.innerText = "Table Reserved"; 
}

