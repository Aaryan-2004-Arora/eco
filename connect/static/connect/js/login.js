document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here you would typically send a request to your backend for authentication
        console.log("Username:", username);
        console.log("Password:", password);

        // For demonstration, alert the user and reset the form
        alert('Login successful! (This is just a demo)');
        loginForm.reset();
    });
});
