const serviceItems = document.querySelectorAll('.service-item');

    function checkVisibility() {
        serviceItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            
            if (isVisible) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check in case items are already in view
    checkVisibility();