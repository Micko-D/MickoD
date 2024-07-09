const resumeContents = document.querySelectorAll('.resume-content');

const resumeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.5 // Adjust as needed
});

// Observe resume contents
resumeContents.forEach(content => {
    resumeObserver.observe(content);
});
