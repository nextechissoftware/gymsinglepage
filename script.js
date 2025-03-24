window.onload = function() {
    document.querySelector('.landing-page').classList.add('show-gym-name');
}; // script.js
window.onload = function() {
    document.querySelector('.landing-page').classList.add('show-gym-name');
};

// Smooth scrolling functionality for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Scroll to the section smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Align the section to the top of the viewport
        });
    });
});
//SERVICE// Function to toggle the display of service details on button click
function toggleServiceDetails(event, serviceId) {
    var serviceDetails = document.getElementById(serviceId);
    
    // Toggle between showing and hiding the content
    if (serviceDetails.style.display === "none" || serviceDetails.style.display === "") {
      serviceDetails.style.display = "block";  // Show service details
    } else {
      serviceDetails.style.display = "none";   // Hide service details
    }
  }
  