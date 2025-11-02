// ----- ELEMENT REFERENCES -----
const signUpBtn = document.getElementById("signUpButton");
const signInBtn = document.getElementById("signInButton");
const signUpContainer = document.getElementById("signup");
const signInContainer = document.getElementById("signIn");

// ----- TOGGLE BETWEEN FORMS -----
signUpBtn.addEventListener("click", () => {
  signInContainer.style.display = "none";
  signUpContainer.style.display = "block";
});

signInBtn.addEventListener("click", () => {
  signUpContainer.style.display = "none";
  signInContainer.style.display = "block";
});

// ----- OPTIONAL: FAKE LOGIN VALIDATION -----
document.querySelector('#signIn form').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.querySelector('#signIn input[type="email"]').value.trim();
  const password = document.querySelector('#signIn input[type="password"]').value.trim();

  if (!email || !password) {
    alert("⚠️ Please fill in both fields!");
    return;
  }

  // You can replace this logic with your real backend call
  if (email === "test@gmail.com" && password === "1234") {
    alert("✅ Login Successful! Redirecting to Home...");
    window.location.href = "../../index.html"; // adjust path if needed
  } else {
    alert("❌ Invalid credentials! Try test@gmail.com / 1234 for demo.");
  }
});

// ----- OPTIONAL: SHOW SIGN-IN BY DEFAULT -----
window.addEventListener("DOMContentLoaded", () => {
  signUpContainer.style.display = "none";
  signInContainer.style.display = "block";
});
