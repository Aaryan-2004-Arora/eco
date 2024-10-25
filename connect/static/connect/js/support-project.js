// Sample project data (for demonstration)
const projectData = {
    id: 1,
    title: "Community Solar Initiative",
    description: "Installing solar panels across community buildings.",
    funding: 75000,
    goal: 100000,
    supporters: 128,
};

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProjectDetails();
    initializeSupportForm();
});

// Display project details
function displayProjectDetails() {
    document.getElementById('projectTitle').textContent = projectData.title;
    document.getElementById('projectDescription').textContent = projectData.description;
    document.getElementById('fundingAmount').textContent = `$${projectData.funding.toLocaleString()}`;
    document.getElementById('fundingGoal').textContent = `$${projectData.goal.toLocaleString()}`;
    document.getElementById('supportersCount').textContent = projectData.supporters;
}

// Initialize the donation form
function initializeSupportForm() {
    const supportForm = document.getElementById('supportForm');

    supportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const donationAmount = parseFloat(document.getElementById('donationAmount').value);

        if (donationAmount > 0) {
            projectData.funding += donationAmount; // Update funding
            projectData.supporters += 1; // Increment supporter count
            
            // Update UI with new funding and supporter count
            displayProjectDetails();
            alert(`Thank you for your donation of $${donationAmount}!`);
            supportForm.reset(); // Reset form
        } else {
            alert('Please enter a valid donation amount.');
        }
    });
}
// Set your publishable key from the Stripe dashboard
const stripe = Stripe('YOUR_PUBLISHABLE_KEY'); // Replace with your actual Stripe publishable key

document.getElementById('payButton').addEventListener('click', async () => {
    const amount = document.getElementById('amount').value;

    // Make a request to your server to create a payment intent
    const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: amount })
    });

    const paymentIntent = await response.json();

    // Confirm the payment with the client secret from the payment intent
    const result = await stripe.confirmCardPayment(paymentIntent.client_secret);

    if (result.error) {
        // Display error to your customer (e.g., insufficient funds)
        alert(result.error.message);
    } else {
        // The payment has been processed successfully
        if (result.paymentIntent.status === 'succeeded') {
            alert('Payment successful! Thank you for your support!');
        }
    }
});
