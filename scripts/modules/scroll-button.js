function scrollToElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Element with ID "${elementId}" not found.`);
    }
}

const scrollHome = document.getElementById('scroll-home');

scrollHome.addEventListener('click', () => {
    scrollToElementById('target-home');
});

const scrollAboutMe = document.getElementById('scroll-aboutMe');

scrollAboutMe.addEventListener('click', () => {
    scrollToElementById('target-aboutMe');
});


const scrollMyResume = document.getElementById('scroll-myResume');

scrollMyResume.addEventListener('click', () => {
    scrollToElementById('target-myResume');
});

const scrollMySkill = document.getElementById('scroll-mySkill');

scrollMySkill.addEventListener('click', () => {
    scrollToElementById('target-mySkill');
});

const scrollMyService = document.getElementById('scroll-myService');

scrollMyService.addEventListener('click', () => {
    scrollToElementById('target-myService');
});

const scrollMyContact1 = document.getElementById('scroll-myContact1');

scrollMyContact1.addEventListener('click', () => {
    scrollToElementById('target-myContact');
});

const scrollMyContact = document.getElementById('scroll-myContact');

scrollMyContact.addEventListener('click', () => {
    scrollToElementById('target-myContact');
});