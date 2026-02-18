/**
 * StraySouls - Main JavaScript
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
    const user = JSON.parse(localStorage.getItem('straySoulsUser'));
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
                <a href="signup.html" class="btn btn-primary">Sign Up</a>
            `;
        }
    }
}

function logout() {
    localStorage.removeItem('straySoulsUser');
    window.location.href = 'index.html';
}

// Utility: Toast Notification
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span>${message}</span>
        <i class="fas fa-times" style="cursor: pointer;" onclick="this.parentElement.remove()"></i>
    `;

    container.appendChild(toast);

    // Trigger reflow
    void toast.offsetWidth;

    // Show
    toast.classList.add('show');

    // Auto hide
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Global generic redirect with delay for smooth UX
function delayedRedirect(url, delay = 1500) {
    setTimeout(() => {
        window.location.href = url;
    }, delay);
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
