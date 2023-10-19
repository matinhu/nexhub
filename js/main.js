document.addEventListener('DOMContentLoaded', () => {
  // Toggle between Login and Register
  const toggleToRegister = document.getElementById('toggleToRegister');
  const toggleToLogin = document.getElementById('toggleToLogin');

  const toggleForms = (show, hide) => {
    show.classList.replace('d-none', 'd-block');
    hide.classList.replace('d-block', 'd-none');
  };

  toggleToRegister.addEventListener('click', () => {
    toggleForms(
      document.getElementById('registerForm'),
      document.getElementById('loginForm')
    );
  });

  toggleToLogin.addEventListener('click', () => {
    toggleForms(
      document.getElementById('loginForm'),
      document.getElementById('registerForm')
    );
  });

  // Mock API Calls
  document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;


    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        const token = data.token
        const user = data.user
        document.getElementById("loggedPerson").textContent = `Bem vindo(a), ${user.username}`;
        console.log('Login Response:', data);
        // Handle the login response here
      })
      .catch((error) => console.error('Login Error:', error));

  });

  document.getElementById('register').addEventListener('submit', function (e) {
    e.preventDefault();
    // Replace this with your actual API call
    console.log('API call to register endpoint');
  });
});
