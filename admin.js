// Simple simulation of admin login credentials
const adminCredentials = {
    username: "admin",
    password: "password123"
  };
  
  const loginForm = document.getElementById('login-form');
  const loginContainer = document.getElementById('login-container');
  const dashboard = document.getElementById('dashboard');
  const loginError = document.getElementById('login-error');
  
  // Handle Login Submission
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username === adminCredentials.username && password === adminCredentials.password) {
      loginContainer.classList.add('hidden');
      dashboard.classList.remove('hidden');
    } else {
      loginError.textContent = "Invalid username or password. Please try again.";
    }
  });
  
  // Handling Add Doctor Form
  const doctorForm = document.getElementById('doctor-form');
  doctorForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('doctor-name').value;
    const speciality = document.getElementById('doctor-speciality').value;
    const contact = document.getElementById('doctor-contact').value;
  
    // Here you would typically send the data to your server or Firebase
    displayMessage(`Doctor ${name} (${speciality}) with contact ${contact} added successfully!`);
    doctorForm.reset();
  });
  
  // Handling Add Schedule Form
  const scheduleForm = document.getElementById('schedule-form');
  scheduleForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const doctor = document.getElementById('schedule-doctor').value;
    const date = document.getElementById('schedule-date').value;
    const time = document.getElementById('schedule-time').value;
  
    // Here you would typically send the data to your server or Firebase
    displayMessage(`Operation scheduled for Dr. ${doctor} on ${date} at ${time}.`);
    scheduleForm.reset();
  });
  
  // Function to display messages on the dashboard
  function displayMessage(message) {
    const dashboardMessages = document.getElementById('dashboard-messages');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    dashboardMessages.appendChild(messageElement);
  }
  