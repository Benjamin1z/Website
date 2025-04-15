function toggleMenu() {
    alert("Menu clicked! You can add your nav logic here.");
  }
  
  // You can link this in your index.html:  <script src="script.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    const learnMoreLinks = document.querySelectorAll('.learn-more');

    learnMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the link from navigating
            alert('Learn More clicked!');  // Replace with your desired action
        });
    });
});

// script.js (Optional)

document.addEventListener('DOMContentLoaded', function() {
    const learnMoreLinks = document.querySelectorAll('.learn-more');

    learnMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Learn More clicked for Large Organizations!');
        });
    });
});

// script.js (no JavaScript needed for this static page)

// No JavaScript needed for this static page

