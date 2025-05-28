// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('show');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Search Functionality
const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');

if (searchButton) {
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Implement search functionality
            console.log('Searching for:', searchTerm);
        }
    });
}

// Stats Counter Animation
const stats = document.querySelectorAll('.stat-number');

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const interval = duration / 100;

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, interval);
}

// Intersection Observer for Stats
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-count'));
            animateCounter(entry.target, target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => observer.observe(stat));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Scroll Effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Jobs Carousel
document.addEventListener('DOMContentLoaded', function () {
    const jobs = [
        { title: "Software Engineer", company: "ABC Tech", location: "Mumbai", type: "Full Time" },
        { title: "HR Manager", company: "XYZ Corp", location: "Delhi", type: "Full Time" },
        { title: "Backend Developer", company: "Dev Solutions", location: "Remote", type: "WFH" },
        { title: "Marketing Lead", company: "Marketify", location: "Pune", type: "Full Time" },
        { title: "Finance Analyst", company: "FinServe", location: "Bangalore", type: "Full Time" },
        { title: "Medical Rep", company: "HealthPlus", location: "Chennai", type: "Full Time" },
        { title: "Frontend Developer", company: "WebWorks", location: "Hyderabad", type: "Full Time" },
        { title: "QA Tester", company: "Testify", location: "Kolkata", type: "WFH" },
        { title: "UI/UX Designer", company: "DesignPro", location: "Gurugram", type: "Full Time" },
        { title: "Sales Executive", company: "SalesForce", location: "Ahmedabad", type: "Full Time" }
    ];

    const track = document.querySelector('.jobs-carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const cardWidth = 320; // 300px card + 20px margin

    // Inject job cards if not already present
    if (track && track.children.length === 0) {
        jobs.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card';
            card.innerHTML = `
                <h4>${job.title}</h4>
                <p><strong>${job.company}</strong></p>
                <p>${job.location} | ${job.type}</p>
                <a href="#" class="btn btn-yellow">Apply Now</a>
            `;
            track.appendChild(card);
        });
    }

    function updateButtons() {
        prevBtn.disabled = track.scrollLeft <= 0;
        nextBtn.disabled = track.scrollLeft + track.offsetWidth >= track.scrollWidth - 1;
    }

    prevBtn.addEventListener('click', function () {
        track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        setTimeout(updateButtons, 400);
    });

    nextBtn.addEventListener('click', function () {
        track.scrollBy({ left: cardWidth, behavior: 'smooth' });
        setTimeout(updateButtons, 400);
    });

    track.addEventListener('scroll', updateButtons);

    // Initial state
    updateButtons();
});