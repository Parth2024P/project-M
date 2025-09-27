document.addEventListener('DOMContentLoaded', () => {

    // --- FORM SUBMISSION FUNCTIONS ---
    function handleHelpFormSubmission(event) {
        event.preventDefault(); // Prevents the form from reloading the page
        const form = event.target;
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => (data[key] = value));

        const existingRequests = JSON.parse(localStorage.getItem('helpRequests')) || [];
        existingRequests.push(data);
        localStorage.setItem('helpRequests', JSON.stringify(existingRequests));
        
        const helpModal = document.getElementById('helpModal');
        helpModal.style.display = 'flex';
        setTimeout(() => helpModal.style.display = 'none', 3000);
        
        form.reset();
    }

    function handleVolunteerFormSubmission(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => (data[key] = value));

        const existingVolunteers = JSON.parse(localStorage.getItem('volunteers')) || [];
        existingVolunteers.push(data);
        localStorage.setItem('volunteers', JSON.stringify(existingVolunteers));

        const volunteerModal = document.getElementById('volunteerModal');
        volunteerModal.style.display = 'flex';
        setTimeout(() => volunteerModal.style.display = 'none', 3000);
        
        form.reset();
    }

    // --- DISPLAY FUNCTIONS FOR DIRECTORY PAGES ---
    function displayHelpRequests() {
        const requestsContainer = document.getElementById('helpRequestsList');
        if (!requestsContainer) return;

        const requests = JSON.parse(localStorage.getItem('helpRequests')) || [];
        if (requests.length === 0) {
            requestsContainer.innerHTML = '<p>No help requests found.</p>';
            return;
        }

        requests.forEach(request => {
            const card = document.createElement('div');
            card.className = 'directory-card';
            card.innerHTML = `
                <h4>${request.fullname}</h4>
                <p><strong>Email:</strong> ${request.email}</p>
                <p><strong>Contact:</strong> ${request.contact}</p>
                <p><strong>Country:</strong> ${request.country}</p>
                <p><strong>Area:</strong> ${request.area}</p>
                <p><strong>Help Type:</strong> ${request.helpType}</p>
                <p><strong>Description:</strong> ${request.description || 'N/A'}</p>
            `;
            requestsContainer.appendChild(card);
        });
    }

    function displayVolunteers() {
        const volunteersContainer = document.getElementById('volunteersList');
        if (!volunteersContainer) return;

        const volunteers = JSON.parse(localStorage.getItem('volunteers')) || [];
        if (volunteers.length === 0) {
            volunteersContainer.innerHTML = '<p>No volunteers signed up yet.</p>';
            return;
        }

        volunteers.forEach(volunteer => {
            const card = document.createElement('div');
            card.className = 'directory-card';
            card.innerHTML = `
                <h4>${volunteer.fullname}</h4>
                <p><strong>Email:</strong> ${volunteer.email}</p>
                <p><strong>Contact:</strong> ${volunteer.contact}</p>
                <p><strong>Country:</strong> ${volunteer.country}</p>
                <p><strong>Area:</strong> ${volunteer.area}</p>
                <p><strong>Can Provide:</strong> ${volunteer.helpType}</p>
            `;
            volunteersContainer.appendChild(card);
        });
    }

    // --- ATTACH EVENT LISTENERS & INITIAL DISPLAY ---
    const helpForm = document.getElementById('helpForm');
    if (helpForm) {
        helpForm.addEventListener('submit', handleHelpFormSubmission);
    }
    
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', handleVolunteerFormSubmission);
    }

    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const closeModalBtn = modal.querySelector('.close');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Code for the help text button, now correctly placed
    var helpTextButton = document.getElementById("donate-btn");
    if (helpTextButton) {
        helpTextButton.addEventListener("click", () => {
            window.open('listvol.html', "_blank");
        });
    }

    // Run display functions to show data on page load
    displayHelpRequests();
    displayVolunteers();
});