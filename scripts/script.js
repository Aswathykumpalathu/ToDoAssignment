document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (username === 'admin' && password === '12345') {
      // Redirect to the todo list page
      window.location.href = 'todo.html';
    } else {
      // Show an error message
      alert('Invalid username or password. Please try again.');
    }
  });