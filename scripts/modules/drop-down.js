
document.addEventListener('DOMContentLoaded', () => {
    const dropdownItems = document.querySelectorAll('.dropdown-content p');

    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            // Hide the dropdown content when an item is clicked
            item.parentElement.style.display = 'none';
        });
    });

    document.querySelector('.dropdown').addEventListener('mouseenter', () => {
        document.querySelector('.dropdown-content').style.display = 'block';
    });

    document.querySelector('.dropdown').addEventListener('mouseleave', () => {
        document.querySelector('.dropdown-content').style.display = 'none';
    });
});
