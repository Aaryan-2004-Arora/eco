document.addEventListener('DOMContentLoaded', () => {
    const projectForm = document.getElementById('projectForm');
    
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const project = {
            name: document.getElementById('projectName').value,
            company: document.getElementById('companyName').value,
            idea: document.getElementById('idea').value,
            about: document.getElementById('about').value,
            location: document.getElementById('location').value,
            description: document.getElementById('description').value,
        };

        // Log project data (could be sent to a server here)
        console.log("Project Submitted:", project);

        // Clear the form
        projectForm.reset();

        alert('Project successfully submitted! Our team will review your proposal.');
    });
});
