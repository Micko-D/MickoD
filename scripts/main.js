console.log("hello");


document.addEventListener('DOMContentLoaded', () => {
    function include(file) {
        let script = document.createElement('script');
        script.src = file;
        script.type = 'text/javascript';
        script.defer = true;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    /* Include Many JS files */
    include("scripts/modules/scroll-button.js");
    include("scripts/modules/typing-text.js");
    include("scripts/modules/aboutme-image.js");
    include("scripts/modules/my-resume-content.js");
    include("scripts/modules/bulleted.js");
    include("scripts/modules/drop-down.js");
    include("scripts/modules/fade-service.js");
    include("scripts/modules/form-validation.js");
    include("scripts/modules/burger-menu.js");
    include("scripts/modules/change-social-contact-icon-size.js");
    include("scripts/modules/show-modal.js");

    
});


