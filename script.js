document.addEventListener('DOMContentLoaded', function () {
  // Form and feedback elements (as required)
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent actual form submission

    // Retrieve & trim inputs
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation trackers
    let isValid = true;
    const messages = [];

    // Username validation: at least 3 chars
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email validation: must include '@' and '.'
    if (!(email.includes('@') && email.includes('.'))) {
      isValid = false;
      messages.push('Please enter a valid email address containing "@" and ".".');
    }

    // Password validation: at least 8 chars
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Show feedback area
    feedbackDiv.style.display = 'block';

    if (isValid) {
      // Success
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745';     // green text
      // optional: make the background green-ish so it looks like success
      feedbackDiv.style.backgroundColor = '#d4edda';
    } else {
      // Errors: join messages with <br> and show in red
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545';     // error text color
      // ensure error background (matches the CSS initial color)
      feedbackDiv.style.backgroundColor = '#ffbaba';
    }
  };