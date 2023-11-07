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
    });
});

// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Get all sections
const sections = document.querySelectorAll('section');

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

        // Hide all sections
        sections.forEach((section) => {
            section.style.display = 'none';
        });

        // Show the corresponding section based on the index
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

// Example smooth scrolling with added offset for the header
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    });
});
