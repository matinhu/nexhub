document.addEventListener('DOMContentLoaded', () => {
  // Toggle between Login and Register
  const toggleToRegister = document.getElementById('toggleToRegister');
  const toggleToLogin = document.getElementById('toggleToLogin');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  toggleToRegister.addEventListener('click', () => {
    console.log('botão registrar clicado')
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
  });

  toggleToLogin.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  });

  // Mock API Calls
  document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    // Replace this with your actual API call
    console.log('API call to login endpoint');
  });

  document.getElementById('register').addEventListener('submit', function (e) {
    e.preventDefault();
    // Replace this with your actual API call
    console.log('API call to register endpoint');
  });
});
