function submitForm() {
  var nameInput = document.getElementById('name').value;
  var phoneInput = document.getElementById('phone').value;
  var dateInput = document.getElementById('date').value;
  var timeInput = document.getElementById('time').value;
  var numberOfPeopleInput = document.getElementById('numberOfPeople').value;
  var errorMessage = document.getElementById('errorMessage');

  // Reset error message
  errorMessage.innerText = "";
  // Validate if all fields are filled
  if (!nameInput || !phoneInput || !dateInput || !timeInput || !numberOfPeopleInput) {
    errorMessage.innerText = "Please fill out all fields";
    return;
  }
  
  // Validate phone number
  if (phoneInput.length !== 10 || isNaN(phoneInput)) {
    errorMessage.innerText = "Phone number must be a 10-digit number";
    return;
  }

  // Validate time
  var currentTime = new Date();
  var selectedTime = new Date(dateInput + " " + timeInput);
  if (selectedTime < currentTime) {
    errorMessage.innerText = "Booking Unavailable";
    return;
  }

  // Validation passed, show success message or submit the form
  errorMessage.innerText = "Table Reserved"; // You can submit the form here
}

