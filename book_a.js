const doctors = [
    {
        name: "Dr. Ramesh Sharma",
        speciality: "Cardiologist"
    },
    {
        name: "Dr. Sunita Mehta",
        speciality: "Dermatologist"
    },
    {
        name: "Dr. Arvind Kumar",
        speciality: "Orthopedist"
    },
    {
        name: "Dr. Priya Das",
        speciality: "Pediatrician"
    },
    {
        name: "Dr. Anil Kapoor",
        speciality: "Cardiologist"
    },
    {
        name: "Dr. Meena Rao",
        speciality: "Orthopedist"
    }
];

// Populate the doctor dropdown
function populateDoctors() {
    const doctorSelect = document.getElementById('doctor');
    doctorSelect.innerHTML = '<option value="">Select Doctor</option>'; // Clear existing options

    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.name;
        option.textContent = `${doctor.name} (${doctor.speciality})`;
        doctorSelect.appendChild(option);
    });
}

// Handle form submission
document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const formData = new FormData(this);
    const appointmentDetails = {};

    for (const [key, value] of formData.entries()) {
        appointmentDetails[key] = value;
    }

    console.log('Appointment Details:', appointmentDetails);
    alert('Appointment booked successfully!');
    this.reset(); // Clear the form
});

// Populate doctors on page load
document.addEventListener('DOMContentLoaded', populateDoctors);

function bookAppointment(doctorName) {
    // Find the selected doctor's details
    const selectedDoctor = doctors.find(doctor => doctor.name === doctorName);

    if (selectedDoctor) {
        // Redirect to the book-appointment page with doctor details as URL parameters
        window.location.href = `book-appointment.html?name=${encodeURIComponent(selectedDoctor.name)}&speciality=${encodeURIComponent(selectedDoctor.speciality)}`;
    }
}


// Function to get URL parameters
function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split('&');

    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    });

    return params;
}

// Pre-fill the form with doctor details from URL parameters
function prefillForm() {
    const params = getUrlParams();
    if (params.name && params.speciality) {
        document.getElementById('doctor').value = params.name;
        document.getElementById('specialization').value = params.speciality;
    }
}

// Populate doctors and pre-fill form on page load
document.addEventListener('DOMContentLoaded', () => {
    populateDoctors();
    prefillForm();
});