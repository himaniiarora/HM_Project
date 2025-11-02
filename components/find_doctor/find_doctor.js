const doctors = [
    {
        name: "Dr. Ramesh Sharma",
        degree: "MD",
        experience: "10 years",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVqz-gBmf2o2_MDrY9BzFUekjIZWjgf4_Z1A&s",
        languages: ["English","Hindi"],
        availability: "Mon-Fri, 9am-5pm",
        fees: "₹1500",
        speciality: "Cardiologist",
        gender: "Male"
    },
    {
        name: "Dr. Sunita Mehta",
        degree: "MBBS",
        experience: "8 years",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBIs08ez-JmxWVE2ucSW7XA5hxREVSUbazkW251cL5KWudOiYGkzLJq76jeVLr9D03lw&usqp=CAU",
        languages: ["English", "Hindi"],
        availability: "Tue-Sat, 10am-6pm",
        fees: "₹1200",
        speciality: "Dermatologist",
        gender: "Female"
    },
    {
        name: "Dr. Arvind Kumar",
        degree: "MD",
        experience: "12 years",
        image: "https://lcf.org.in/wp-content/uploads/arvind.jpg",
        languages: ["English", "Hindi"],
        availability: "Mon-Wed, 8am-4pm",
        fees: "₹2000",
        speciality: "Orthopedist",
        gender: "Male"
    },
    {
        name: "Dr. Priya Das",
        degree: "MBBS",
        experience: "7 years",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwXof2j40PDUZaSdnb5DuxoqlBX9lGZWOFGQ&s",
        languages: ["Hindi", "Bengali"],
        availability: "Thu-Sun, 11am-7pm",
        fees: "₹1800",
        speciality: "Pediatrician",
        gender: "Female"
    },
    {
        name: "Dr. Anil Kapoor",
        degree: "MD",
        experience: "15 years",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3j70b8POjC5agdt3gP9q3X8qim61tgfYEg&s",
        languages: ["English","Hindi"],
        availability: "Mon-Fri, 10am-6pm",
        fees: "₹2500",
        speciality: "Cardiologist",
        gender: "Male"
    },
    {
        name: "Dr. Meena Rao",
        degree: "MBBS",
        experience: "7 years",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMhDUlWQBLGfIjq9NjqzkHKAzhXvwd80Zsg&s",
        languages: ["Hindi", "English"],
        availability: "Thu-Sun, 11am-7pm",
        fees: "₹1800",
        speciality: "Pediatrician",
        gender: "Female"
    }
];

function displayDoctors(filteredDoctors) {
    const container = document.getElementById('doctorsList');
    container.innerHTML = ''; // Clear current listings
    filteredDoctors.forEach(doctor => {
        const card = document.createElement('div');
        card.className = 'doctor-card';
        card.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}">
            <div class="details">
                <h2>${doctor.name}</h2>
                <p><strong>Speciality:</strong> ${doctor.speciality}</p>
                <p>${doctor.degree} - ${doctor.experience}</p>
                <p>Languages: ${doctor.languages.join(', ')}</p>
                <p>Available: ${doctor.availability}</p>
                <p>Fees: ${doctor.fees}</p>
                <button onclick="bookAppointment('${doctor.name}', '${doctor.speciality}')">Book Appointment</button>
            </div>
        `;

        card.innerHTML = `
    <div class="image-container">
        <img src="${doctor.image}" alt="${doctor.name}">
    </div>
    <div class="details">
        <h2>${doctor.name}</h2>
        <p><strong>Speciality:</strong> ${doctor.speciality}</p>
        <p><strong>Degree:</strong> ${doctor.degree}</p>
        <p><strong>Experience:</strong> ${doctor.experience}</p>
        <p><strong>Languages:</strong> ${doctor.languages.join(', ')}</p>
        <p><strong>Availability:</strong> ${doctor.availability}</p>
        <p><strong>Fees:</strong> ${doctor.fees}</p>
        <button onclick="bookAppointment('${doctor.name}')">Book Appointment</button>
    </div>
`;
        container.appendChild(card);
    });
}

function filterDoctors() {
    const speciality = document.getElementById('specialityFilter').value;
    const language = document.getElementById('languageFilter').value;
    const gender = document.getElementById('genderFilter').value;

    const filtered = doctors.filter(doctor => {
        return (!speciality || doctor.speciality === speciality) &&
               (!language || doctor.languages.includes(language)) &&
               (!gender || doctor.gender === gender);
    });

    displayDoctors(filtered);
}

function clearFilters() {
    document.getElementById('specialityFilter').value = '';
    document.getElementById('languageFilter').value = '';
    document.getElementById('genderFilter').value = '';
    displayDoctors(doctors);
}

function bookAppointment(doctorName) {
    // Find selected doctor
    const doctor = doctors.find(doc => doc.name === doctorName);

    if (doctor) {
        // Store selected doctor details in localStorage
        localStorage.setItem("selectedDoctor", JSON.stringify({
            name: doctor.name,
            speciality: doctor.speciality
        }));

        // Redirect to Book Appointment page
        window.location.href = "../book_appointment/book_a.html";
    }
}

// Initial display of all doctors
document.addEventListener('DOMContentLoaded', () => displayDoctors(doctors));
document.getElementById('specialityFilter').addEventListener('change', filterDoctors);
document.getElementById('languageFilter').addEventListener('change', filterDoctors);
document.getElementById('genderFilter').addEventListener('change', filterDoctors);