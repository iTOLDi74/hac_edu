// Sample data for course listings (replace this with your actual data)
const courses = [
    {
        title: 'JEE Main: Mechanics',
        subtopics: ['Kinematics', 'Dynamics', 'Statics'],
        contributions: 15, 
        pageUrl: 'mechanics.html' // Example number of contributions
    },
    {
        title: 'JEE Main: Probability',
        subtopics: ['Basic Probability', 'Conditional Probability', 'Probability Distributions'],
        contributions: 10,
        pageUrl: 'Probability.html'  // Example number of contributions
    },
    {
        title: 'JEE Main: Electrostatis',
        subtopics: ['Electric Fields', 'Gauss\'s Law', 'Electric Potential'],
        contributions: 8,
        pageUrl: 'electrostatis.html'  // Example number of contributions
    },
    {
        title: 'JEE Main: Organic Chemistry',
        subtopics: ['Hydrocarbons', 'Alcohols, Phenols, and Ethers', 'Aldehydes and Ketones'],
        contributions: 20,
        pageUrl: 'organicChemistry.html'  // Example number of contributions
    },
    {
        title: 'JEE Main: Physical Chemistry',
        subtopics: ['Chemical Kinetics', 'Thermodynamics', 'Chemical Equilibrium'],
        contributions: 12,
        pageUrl: 'physicalChemistry.html'  // Example number of contributions
    }
];

// Function to generate course listings
function generateCourseListings() {
    const courseListings = document.getElementById('course-listings');

    // Clear existing listings
    courseListings.innerHTML = '';

    // Generate new listings
    courses.forEach(course => {
        const courseElement = document.createElement('article');
        courseElement.classList.add('course');

        // Generate subtopic list
        const subtopicsList = course.subtopics.map(subtopic => `<li>${subtopic}</li>`).join('');

        courseElement.innerHTML = `
            <h2>${course.title}</h2>
            <ul class="subtopics">${subtopicsList}</ul>
            <p class="contributions">Contributions: ${course.contributions}</p>
            <a href="${course.pageUrl}">View Course</a>
        `;

        courseListings.appendChild(courseElement);
    });
}

// Call the function to generate course listings when the page loads
window.onload = generateCourseListings;
