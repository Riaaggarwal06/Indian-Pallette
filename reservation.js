function submitForm() {
    var phoneInput = document.getElementById('phone');
    var errorMessage = document.getElementById('errorMessage');
    
    if (phoneInput.value.length !== 10) {
      errorMessage.innerText = "Phone number must be 10 digits long.";
    } else if (phoneInput.value.length === 10 && validateInputs()) {
      errorMessage.innerText = "Table Reserved";
    }
  }

  function validateInputs() {
    var nameInput = document.getElementById('name').value;
    var dateInput = document.getElementById('date').value;
    var timeInput = document.getElementById('time').value;
    var numberOfPeopleInput = document.getElementById('numberOfPeople').value;
    
    // Check if all other input fields have values
    if (nameInput && dateInput && timeInput && numberOfPeopleInput) {
      return true;
    } else {
      return false;
    }
  }