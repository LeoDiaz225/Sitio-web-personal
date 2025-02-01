// Validación básica del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    // Obtén los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validación simple
    if (name && email && message) {
        alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
        document.getElementById('contact-form').reset(); // Limpia el formulario
    } else {
        alert('Por favor, completa todos los campos.');
    }
});