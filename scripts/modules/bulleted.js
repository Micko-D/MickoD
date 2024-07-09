const timelineItems = document.querySelectorAll('.skil-set-item');

// Function to update the timeline connections
function updateTimelineConnections(index) {
    timelineItems.forEach((item, idx) => {
        const content = item.querySelector('.skil-set-content');
        if (idx <= index) {
            item.classList.add('active');
            setTimeout(() => {
                if (idx < index) {
                    timelineItems[idx].classList.add('show-line');
                } else {
                    timelineItems[idx].classList.remove('show-line');
                }
            }, 300 * (idx + 1)); // Adjust the delay as needed
        } else {
            item.classList.remove('active');
            item.classList.remove('show-line');
        }

        // Adjust opacity for timeline content
        content.style.opacity = idx === index ? 1 : 0.5;
    });
}

// Intersection Observer to toggle 'in-view' class
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
            // Reset connections when out of view
            timelineItems.forEach(item => {
                item.classList.remove('active');
                item.classList.remove('show-line');
                const content = item.querySelector('.skil-set-content');
                content.style.opacity = 0.5; // Reset opacity for non-active items
                timelineItems[0].classList.add('active');
                timelineItems[0].querySelector('.skil-set-content').style.opacity = 1;
            });
        }
    });
}, {
    threshold: 0.5 // Adjust as needed
});

timelineItems.forEach(item => {
    observer.observe(item);
});

// Click event listener for each timeline item
timelineItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Update timeline connections
        updateTimelineConnections(index);
    });
});

// Initially show the first item with full opacity
timelineItems[0].classList.add('active');
timelineItems[0].querySelector('.skil-set-content').style.opacity = 1;
