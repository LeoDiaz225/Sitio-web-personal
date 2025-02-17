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

    // Si la validación es exitosa, enviar el formulario
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => {
        // Mostrar mensaje de éxito
        alert('¡Mensaje enviado correctamente! Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
        this.reset(); // Limpia el formulario
        // Esperar 2 segundos antes de redirigir
        setTimeout(() => {
            window.location.href = 'https://leodiaz225.github.io/Sitio-web-personal/';
        }, 2000);
    })
    .catch(error => {
        alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
    });
});

// Validación en tiempo real para eliminar caracteres no numéricos
document.getElementById("phone").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, ""); // Elimina cualquier carácter no numérico
});

// Traducción de la página
const translations = {
    es: {
        about: "Sobre Mí",
        services: "Servicios",
        portfolio: "Portafolio",
        contact: "Contacto",
        headerTitle: "Leonel Diaz",
        headerSubtitle: "QA Tester Manual/Automático | Especialista en Control de Calidad de Software",
        email: "Email:",
        phone: "Teléfono:",
        country: "País:",
        aboutMe: "Soy un QA Tester con 1 año de experiencia en testing manual y automatizado. Me especializo en garantizar la calidad del software y mejorar la experiencia del usuario. He trabajado en proyectos de finanzas y servicios de logística.",
        skillsTitle: "Habilidades Técnicas",
        servicesTitle: "Servicios",
        service1: "Testing Manual",
        service2: "Testing Automatizado",
        service3: "Pruebas de Rendimiento",
        service4: "Pruebas de Seguridad",
        portfolioTitle: "Portafolio",
        contactTitle: "Contacto",
        sendMessage: "Enviar"
    },
    en: {
        about: "About Me",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",
        headerTitle: "Leonel Diaz",
        headerSubtitle: "Manual/Automated QA Tester | Software Quality Assurance Specialist",
        email: "Email:",
        phone: "Phone:",
        country: "Country:",
        aboutMe: "I am a QA Tester with 1 year of experience in manual and automated testing. I specialize in ensuring software quality and improving user experience. I have worked on finance and logistics service projects.",
        skillsTitle: "Technical Skills",
        servicesTitle: "Services",
        service1: "Manual Testing",
        service2: "Automated Testing",
        service3: "Performance Testing",
        service4: "Security Testing",
        portfolioTitle: "Portfolio",
        contactTitle: "Contact",
        sendMessage: "Send"
    }
};

// Función para cambiar idioma
function toggleLanguage() {
    const button = document.getElementById("language-toggle");
    if (!button) {
        console.error("Botón de cambio de idioma no encontrado.");
        return;
    }
    
    const currentLang = button.dataset.lang || "es";
    const newLang = currentLang === "es" ? "en" : "es";
    button.dataset.lang = newLang;
    button.textContent = newLang === "es" ? "EN" : "ES";
    document.documentElement.lang = newLang;
    
    console.log("Cambiando idioma a:", newLang);
    
    const elementsToTranslate = {
        "about": "#about h2",
        "services": "#services h2",
        "portfolio": "#portfolio h2",
        "contact": "#contact h2",
        "headerTitle": "header h1",
        "headerSubtitle": "header p",
        "aboutMe": "#about p",
        "skillsTitle": "#about h3",
        "servicesTitle": "#services h2",
        "service1": "#services .service:nth-child(1) h3",
        "service2": "#services .service:nth-child(2) h3",
        "service3": "#services .service:nth-child(3) h3",
        "service4": "#services .service:nth-child(4) h3",
        "portfolioTitle": "#portfolio h2",
        "contactTitle": "#contact h2",
        "sendMessage": "#contact-form button"
    };
    
    Object.keys(elementsToTranslate).forEach(key => {
        const element = document.querySelector(elementsToTranslate[key]);
        if (element) {
            element.textContent = translations[newLang][key];
        } else {
            console.warn("Elemento no encontrado para:", key);
        }
    });
}

// Evento para el botón de cambio de idioma
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("language-toggle");
    if (!button) {
        console.error("No se encontró el botón de idioma.");
        return;
    }
    
    button.dataset.lang = button.dataset.lang || "es";
    button.addEventListener("click", toggleLanguage);
    console.log("Botón de idioma inicializado con idioma:", button.dataset.lang);
});



