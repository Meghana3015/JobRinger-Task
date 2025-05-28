// Sample Jobs Data
const jobs = [
    {
        title: "Lead - Credit & Operations (Secured Loan)",
        company: "ARTH",
        type: "Full Time - Permanent",
        experience: "4 - 10 Years",
        location: "Gurgaon / Gurugram / India",
        label: "In Office Job"
    },
    {
        title: "Embedded System Mentor",
        company: "ONMYOWNTECHNOLOGY",
        type: "Full Time - Permanent",
        experience: "1 - 5 Years",
        location: "Mumbai / India",
        label: "In Office Job"
    },
    {
        title: "Video Editor Intern",
        company: "i-mates",
        type: "Full Time - Internship",
        experience: "0 - 2 Years",
        location: "Pune / India",
        label: "In Office Job"
    },
    {
        title: "LABEL DESIGNER",
        company: "Katyayani Organics",
        type: "Full Time - Permanent",
        experience: "0 - 5 Years",
        location: "Bhopal / India",
        label: "In Office Job"
    }
];

// Sample Employers Data
const employers = [
    {
        name: "Golden Triangle",
        logo: "https://images.pexels.com/photos/278887/pexels-photo-278887.jpeg"
    },
    {
        name: "Kolte Company",
        logo: "https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg"
    },
    {
        name: "Colladome",
        logo: "https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg"
    },
    {
        name: "HumanAI",
        logo: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg"
    },
    {
        name: "Lotus Networks",
        logo: "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg"
    },
    {
        name: "Boardroom",
        logo: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg"
    },
    {
        name: "Finesse",
        logo: "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg"
    },
    {
        name: "BlueWing",
        logo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    }
];

// Render Jobs
function renderJobs() {
    const jobsList = document.getElementById('jobs-list');
    if (!jobsList) return;

    jobsList.innerHTML = jobs.map(job => `
        <div class="job-card">
            <div class="job-label">${job.label}</div>
            <div class="job-header">
                <h3 class="job-title">${job.title}</h3>
                <p class="company-name">${job.company}</p>
                <div class="job-type">
                    <i class="fas fa-briefcase"></i>
                    <span>${job.type}</span>
                </div>
                <div class="job-experience">
                    <i class="fas fa-user-clock"></i>
                    <span>${job.experience}</span>
                </div>
                <div class="job-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${job.location}</span>
                </div>
            </div>
            <div class="job-footer">
                <a href="#" class="apply-btn">Apply<i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

// Render Employers
function renderEmployers() {
    const employersList = document.getElementById('employers-list');
    if (!employersList) return;

    employersList.innerHTML = employers.map(employer => `
        <div class="employer-card">
            <img src="${employer.logo}" alt="${employer.name}" class="employer-logo">
        </div>
    `).join('');
}

// Simple horizontal carousel logic
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const logoWidth = track.querySelector('.carousel-logo').offsetWidth + 24; // logo width + gap

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -logoWidth * 2, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: logoWidth * 2, behavior: 'smooth' });
    });
});

// Auto-scroll for carousel
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    let scrollAmount = 1;
    let autoScroll;

    function startAutoScroll() {
        autoScroll = setInterval(() => {
            if (track.scrollLeft + track.clientWidth >= track.scrollWidth) {
                track.scrollLeft = 0;
            } else {
                track.scrollLeft += scrollAmount;
            }
        }, 20);
    }

    function stopAutoScroll() {
        clearInterval(autoScroll);
    }

    track.addEventListener('mouseenter', stopAutoScroll);
    track.addEventListener('mouseleave', startAutoScroll);

    startAutoScroll();
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderJobs();
    renderEmployers();
});