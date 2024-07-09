
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Perform validation
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    if (!name) {
        Swal.fire({
            icon: 'error',
            title: 'Form Empty',
            text: 'Please enter your name.',
        });
        return;
    }

    if (!email) {
        Swal.fire({
            icon: 'error',
            title: 'Almost there',
            text: 'Please enter your email.',
        });
        return;
    }

    if (!message) {
        Swal.fire({
            icon: 'error',
            title: "Don't be hasty",
            text: 'Please enter your message.',
        });
        return;
    }

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Thank you!',
                text: 'Thanks for reaching out! I will get back to you soon.',
            });
            form.reset(); // Clear the form
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data["errors"].map(error => error["message"]).join(", "),
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'There was a problem submitting your form',
                    });
                }
            });
        }
    }).catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'There was a problem submitting your form',
        });
    });
});