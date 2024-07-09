
function updateIconSize(mediaQuery) {
    var icons = document.querySelectorAll('#facebook-icon, #linkedin-icon, #address-icon');
    icons.forEach(function(icon) {
        if (mediaQuery.matches) {
            // If media query matches (max-width: 767px)
            icon.classList.remove('fa-2xl');
            icon.classList.add('fa-xl');
        } else {
            // If media query does not match
            icon.classList.remove('fa-xl');
            icon.classList.add('fa-2xl');
        }
    });
}

// Create a media query list
var mediaQuery = window.matchMedia('(max-width: 767px)');

// Call the function at run time
updateIconSize(mediaQuery);

// Add a listener for changes in the media query's state
mediaQuery.addEventListener('change', function() {
    updateIconSize(mediaQuery);
});