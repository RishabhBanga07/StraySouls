/**
 * StrayCare - Main JavaScript
 */

// Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Check authentication status (mock)
    checkAuth();
});

// Mock Authentication (localStorage)
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('strayCareUser'));
    const authLinks = document.getElementById('auth-links');
    
    if (authLinks) {
        if (user) {
            authLinks.innerHTML = `
                <a href="dashboard.html" class="btn btn-outline">Dashboard</a>
                <a href="#" onclick="logout()" class="btn btn-secondary">Logout</a>
            `;
        } else {
            authLinks.innerHTML = `
                <a href="login.html" class="btn btn-outline">Login</a>
                <a href="login.html?mode=signup" class="btn btn-primary">Sign Up</a>
            `;
        }
    }
}

function logout() {
    localStorage.removeItem('strayCareUser');
    window.location.href = 'index.html';
}

// Utility: Show Alert
function showAlert(message, type = 'success') {
    // In a real app, this would be a nice toast notification
    alert(message);
}

// Utility: Mock API Call
async function mockApiCall(endpoint, data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`API Call to ${endpoint}:`, data);
            resolve({ success: true, message: 'Operation successful' });
        }, 800);
    });
}
