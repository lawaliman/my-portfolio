// Add event listener to navigation links
const navLinks = document.querySelectorAll('#nav-bar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// Add event listener to project links
const projectLinks = document.querySelectorAll('.project a');

projectLinks.forEach(link => {
    link.addEventListener('click', () => {
        const project = link.parentNode.parentNode;
        project.classList.toggle('expanded');
    });
});

// Add event listener to experience links
const experienceLinks = document.querySelectorAll('.experience a');

experienceLinks.forEach(link => {
    link.addEventListener('click', () => {
        const experience = link.parentNode.parentNode;
        experience.classList.toggle('expanded');
    });
});

// Add event listener to achievement links
const achievementLinks = document.querySelectorAll('.achievement a');

achievementLinks.forEach(link => {
    link.addEventListener('click', () => {
        const achievement = link.parentNode.parentNode;
        achievement.classList.toggle('expanded');
    });
});

// Add event listener to hobby links
const hobbyLinks = document.querySelectorAll('.hobby a');

hobbyLinks.forEach(link => {
    link.addEventListener('click', () => {
        const hobby = link.parentNode.parentNode;
        hobby.classList.toggle('expanded');
    });
});

// Add event listener to career goal links
const careerGoalLinks = document.querySelectorAll('.career-goal a');

careerGoalLinks.forEach(link => {
    link.addEventListener('click', () => {
        const careerGoal = link.parentNode.parentNode;
        careerGoal.classList.toggle('expanded');
    });
});

// Add event listener to contact form
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for contacting me!');
});

// Add event listener to nav links
const navBarLinks = document.querySelectorAll('nav ul li a');

navBarLinks.forEach(link => {
    link.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Image Slider Functionality
let currentIndex = 0; // Track the current image index
const images = document.querySelectorAll('.hero-slider img'); // Get all images

function showNextImage() {
    images[currentIndex].style.opacity = 0; // Fade out current image
    currentIndex = (currentIndex + 1) % images.length; // Move to next index
    images[currentIndex].style.opacity = 1; // Fade in next image
}

// Initialize all images to be hidden except the first one
images.forEach((img, index) => {
    img.style.opacity = index === 0 ? 1 : 0; // Show first image only
});

// Change image every 3 seconds
setInterval(showNextImage, 3000);
