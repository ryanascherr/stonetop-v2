const loginBtn = $(".login-btn");
const signupBtn = $(".signup-btn");

const loginHandler = async (e) => {
  console.log("Login!");
    // Stop the browser from submitting the form so we can do so with JavaScript
    e.preventDefault();
    // Gather the data from the form elements on the page
    const username = document.querySelector('.username-login').value.trim();
    const password = document.querySelector('.password-login').value.trim();
    if (username && password) {
      // Send the username and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
};

const signupHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('.username-signup').value.trim();
  const password = document.querySelector('.password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

loginBtn.click(loginHandler);
signupBtn.click(signupHandler);