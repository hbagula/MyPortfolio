// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // You can add additional logic here for dark mode-specific settings or adjustments
}

// Add smooth scrolling to all links inside the navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        // Show the corresponding section based on the index
        sections.forEach((section, index) => {
            if (targetId === section.id) {
                section.style.display = 'block';
                navLinks[index].classList.add('active');
            } else {
                section.style.display = 'none';
                navLinks[index].classList.remove('active');
            }
        });
    });
});

// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Get all sections
const sections = document.querySelectorAll('section');

// Hide all sections except the "About" section
sections.forEach(section => {
    if (section.id !== 'about') {
        section.style.display = 'none';
    }
});

// Add a click event listener to each navigation link
navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior

        // Remove the "active" class from all navigation links
        navLinks.forEach((navLink) => {
            navLink.classList.remove('active');
        });

        // Add the "active" class to the clicked navigation link
        link.classList.add('active');

        // Show the corresponding section based on the index
        sections.forEach((section) => {
            section.style.display = 'none';
        });

        sections[index].style.display = 'block';
    });
});

// Highlight the active section as you scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            navLinks[index].classList.add('active');
        } else {
            navLinks[index].classList.remove('active');
        }
    });
});

// Dark mode toggle listener
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', toggleDarkMode);

// Get the skills container and list of logos
const skillsContainer = document.querySelector('.skills-grid ul');
const logos = skillsContainer.querySelectorAll('li');

// Animation settings
let animationIndex = 0;
const animationInterval = 3000; // Time in milliseconds

// Function to animate the logos
function animateLogos() {
    const translateX = animationIndex * -100 + '%'; // Adjust the value based on your layout
    skillsContainer.style.transform = `translateX(${translateX})`;
    animationIndex = (animationIndex + 1) % logos.length;
}

// Start the animation loop
setInterval(animateLogos, animationInterval);

// Add this to your existing JavaScript or create a new file and link it in your HTML
let currentProject = 1;

function showProject(projectNumber) {
    // Hide all projects
    document.querySelectorAll('.project').forEach(project => {
        project.style.display = 'none';
    });

    // Show the selected project
    document.getElementById(`project${projectNumber}`).style.display = 'block';

    // Update the active project button
    document.querySelectorAll('.project-button').forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(`project${projectNumber}-button`).classList.add('active');
}



