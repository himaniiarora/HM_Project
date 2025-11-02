document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const specialization = document.getElementById("specialization").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name || !email || !phone || !specialization || !date || !time) {
    alert("⚠️ Please fill in all required fields!");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("⚠️ Please enter a valid 10-digit phone number!");
    return;
  }

  document.querySelector(".form-container").style.display = "none";
  document.getElementById("success-message").classList.remove("hidden");
});

document.getElementById("backBtn").addEventListener("click", function () {
  window.location.href = "../../index.html";
});

window.addEventListener("DOMContentLoaded", () => {
  const storedDoctor = JSON.parse(localStorage.getItem("selectedDoctor"));

  if (storedDoctor) {
    // Prefill Doctor Name
    document.getElementById("doctor").value = storedDoctor.name;

    // ✅ Match specialization by trimming and ignoring case
    const specializationSelect = document.getElementById("specialization");
    const target = storedDoctor.speciality.trim().toLowerCase();

    let matched = false;
    for (let option of specializationSelect.options) {
      if (option.value.trim().toLowerCase() === target) {
        option.selected = true;
        matched = true;
        break;
      }
    }

    // Optional confirmation message
    const msgBox = document.getElementById("selectedDoctorMsg");
    if (msgBox) {
      msgBox.textContent = matched
        ? `Booking appointment with ${storedDoctor.name} (${storedDoctor.speciality})`
        : `Booking appointment with ${storedDoctor.name}`;
      msgBox.classList.remove("hidden");
    }

    // Remove data after loading
    localStorage.removeItem("selectedDoctor");
  }
});
