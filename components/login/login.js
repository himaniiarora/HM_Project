document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Normally, you would perform authentication here.
    // For this example, we'll directly redirect to dashboard.html
  
    window.location.href = "index.html";
    /*localStorage.setItem("loginMessage", "You logged in successfully!");*/
  });

