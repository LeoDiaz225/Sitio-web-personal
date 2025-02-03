// Validación básica del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    // Obtén los valores del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Expresión regular para validar solo números entre 10 y 15 dígitos
    const phonePattern = /^[0-9]{10,15}$/;

    // Validación de campos vacíos
    if (!name || !email || !phone || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Validación del teléfono
    if (!phonePattern.test(phone)) {
        alert('Por favor, ingresa un número de teléfono válido (10-15 dígitos).');
        return;
    }

    // Si todo está correcto, muestra mensaje de éxito
    alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
    document.getElementById('contact-form').reset(); // Limpia el formulario
});

// Validación en tiempo real para eliminar caracteres no numéricos
document.getElementById("phone").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, ""); // Elimina cualquier carácter no numérico
});
