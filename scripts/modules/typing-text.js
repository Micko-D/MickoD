function typeWriter(elementId, texts, typingSpeed = 100, delayBetweenTexts = 10) {
    const element = document.getElementById(elementId);
    let currentIndex = 0;
    let currentText = texts[currentIndex];
    let i = 0;
    let isDeleting = false;

    function type() {
        if (!isDeleting && i < currentText.length) {
            element.innerHTML += currentText.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && i > 0) {
            element.innerHTML = currentText.substring(0, i - 1);
            i--;
            setTimeout(type, typingSpeed);
        } else if (!isDeleting && i === currentText.length) {
            // alternateController.next();
            setTimeout(() => {
                isDeleting = true;
                setTimeout(type, typingSpeed);
            }, delayBetweenTexts);
        } else if (isDeleting && i === 0) {

            alternateController.startAlternating();
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length; // Move to the next text in a circular manner
            currentText = texts[currentIndex];
            setTimeout(type, typingSpeed);
        }
    }

    type();
}

const elementId = 'typing-text-position';
const texts = [
    'Junior Developer',
    'Web Developer',
    'Mobile Developer',
    'Graphic Designer',
];
const typingSpeed = 100;
const delayBetweenTexts = 4000;

typeWriter(elementId, texts, typingSpeed, delayBetweenTexts);




// JavaScript function to alternate values in a <p> tag manually
function alternateText(elementId, alternatetexts) {
    const element = document.getElementById(elementId);
    let index = 0;

    function updateText() {
        element.textContent = alternatetexts[index];
        index = (index + 1) % alternatetexts.length; // Move to the next text in a circular manner
    }

    function startAlternating() {
        updateText(); // Initial update
    }

    function next() {
        index = (index + 1) % alternatetexts.length;
        updateText();
    }

    return { startAlternating, next };
}

// Example usage:
const alternatetexts = [
    'As a Junior Developer, I am eager to apply my coding skills and learn from experienced developers to contribute effectively to projects.',
    'As a Web Developer, I specialize in creating responsive and user-friendly websites using modern technologies like HTML, CSS, and JavaScript.',
    'As a Mobile Developer, I focus on building intuitive mobile applications that enhance user experience across iOS and Android platforms.',
    'As a Graphic Designer, I blend creativity with technical skills to produce visually compelling designs that communicate ideas effectively.'
];

const alternateController = alternateText('my-p-tag', alternatetexts);

// Start alternating manually
alternateController.startAlternating();