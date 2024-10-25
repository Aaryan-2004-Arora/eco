// Sample project data
const projects = [
    {
        id: 1,
        title: "Community Solar Initiative",
        description: "Installing solar panels across community buildings",
        funding: 75000,
        goal: 100000,
        supporters: 128,
        image: "community-solar.jpeg" // Local image file
    },
    {
        id: 2,
        title: "Urban Garden Network",
        description: "Creating rooftop gardens for sustainable food production",
        funding: 45000,
        goal: 60000,
        supporters: 89,
        image: "urban-garden.jpeg" // Local image file
    },
    {
        id: 3,
        title: "Rooftop Farming Initiative",
        description: "Developing rooftop farming systems for urban areas",
        funding: 30000,
        goal: 50000,
        supporters: 64,
        image: "rooftop-farming.jpeg" // Placeholder image, replace with actual file if available
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    animateImpactStats();
    initializeEventListeners();
});

// Display projects in the grid
function displayProjects() {
    const projectGrid = document.getElementById('projectGrid');
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectGrid.appendChild(projectCard);
    });
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const progress = (project.funding / project.goal) * 100;
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: 1.5rem;">
            <h3 style="margin-bottom: 0.5rem;">${project.title}</h3>
            <p style="color: #666; margin-bottom: 1rem;">${project.description}</p>
            <div style="background: #eee; height: 10px; border-radius: 5px; margin-bottom: 0.5rem;">
                <div style="background: var(--primary-color); width: ${progress}%; height: 100%; border-radius: 5px;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; color: #666;">
                <span>$${project.funding.toLocaleString()} raised</span>
                <span>${project.supporters} supporters</span>
            </div>
            <button class="cta-button" style="width: 100%; margin-top: 1rem;" onclick="window.location.href='support-project.html'">Support Project</button>
        </div>
    `;
    
    return card;
}

// Animate impact statistics
function animateImpactStats() {
    const projectCount = document.getElementById('projectCount');
    const communityCount = document.getElementById('communityCount');
    const fundingAmount = document.getElementById('fundingAmount');
    
    animateNumber(projectCount, 0, projects.length, 2000);
    animateNumber(communityCount, 0, 1000, 2000);
    animateNumber(fundingAmount, 0, 500000, 2000, true);
}

// Animate a number from start to end
function animateNumber(element, start, end, duration, isCurrency = false) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const animate = () => {
        current += increment;
        if (current >= end) {
            current = end;
        }
        
        element.textContent = isCurrency 
            ? `$${Math.round(current).toLocaleString()}`
            : Math.round(current).toLocaleString();
            
        if (current < end) {
            requestAnimationFrame(animate);
        }
    };
    
    animate();
}

// Initialize event listeners
function initializeEventListeners() {
    const loginBtn = document.querySelector('#loginBtn');
    loginBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
    
    const startProjectBtn = document.querySelector('.cta-button');
    startProjectBtn.addEventListener('click', () => {
        window.location.href = 'start-project.html';
    });
}

// Handle scroll animations
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.background = 'white';
    }
});
