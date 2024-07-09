const imageHolder = document.querySelector('.about-me .content .content-image .image-holder');


// Intersection Observer to toggle 'slide-up' class for image holder
const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
        } else {
            entry.target.classList.remove('slide-up');
            // Force a reflow to restart the animation
            void entry.target.offsetWidth;
        }
    });
}, {
    threshold: 0.5 // Adjust as needed
});

imageObserver.observe(imageHolder);

