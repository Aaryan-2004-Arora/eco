// Sample event data
const events = [
    {
        id: 1,
        title: "Community Clean-Up Day",
        date: "2024-11-15",
        location: "City Park",
        description: "Join us for a day of cleaning and beautifying our local park. Supplies will be provided.",
        image: "clean-up-event.jpeg" // Local image file
    },
    {
        id: 2,
        title: "Sustainable Gardening Workshop",
        date: "2024-12-01",
        location: "Green Thumb Community Center",
        description: "Learn about sustainable gardening practices and how to grow your own food.",
        image: "gardening-workshop.jpeg" // Local image file
    },
    {
        id: 3,
        title: "Renewable Energy Fair",
        date: "2025-01-20",
        location: "Downtown Convention Center",
        description: "Explore the latest in renewable energy solutions and meet local providers.",
        image: "renewable-energy-fair.jpeg" // Local image file
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayEvents();
});

// Display events in the grid
function displayEvents() {
    const eventGrid = document.getElementById('eventGrid');
    
    events.forEach(event => {
        const eventCard = createEventCard(event);
        eventGrid.appendChild(eventCard);
    });
}

// Create an event card element
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    
    card.innerHTML = `
        <img src="${event.image}" alt="${event.title}" style="width: 100%; height: 150px; object-fit: cover;">
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p>${event.description}</p>
        <button class="cta-button" onclick="alert('Thank you for your interest!')">RSVP</button>
    `;
    
    return card;
}
