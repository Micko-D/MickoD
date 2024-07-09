var burgerMenu = document.getElementById('burger-menu');
    var menuItems = document.getElementById('menu-items');

    burgerMenu.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling to the document
        menuItems.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!menuItems.contains(event.target) && !burgerMenu.contains(event.target)) {
            menuItems.classList.remove('show');
        }
    });