<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitizar y validar datos
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $mail = filter_var(trim($_POST['mail']), FILTER_SANITIZE_EMAIL);
    $phone = preg_replace("/[^0-9]/", "", $_POST['phone']); // Solo números
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    // Validar email
    if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        die("Error: Email inválido.");
    }

    // Validar longitud mínima de los datos
    if (empty($name) || empty($mail) || empty($phone) || empty($message)) {
        die("Error: Todos los campos son obligatorios.");
    }

    // Encabezados del correo
    $header = "From: " . $mail . "\r\n";
    $header .= "Reply-To: " . $mail . "\r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $header .= "Mime-Version: 1.0\r\n";
    $header .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Formato del mensaje
    $email_message = "Este mensaje fue enviado por: " . $name . "\r\n";
    $email_message .= "E-mail: " . $mail . "\r\n";
    $email_message .= "Teléfono: " . $phone . "\r\n";
    $email_message .= "Mensaje: " . $message . "\r\n";
    $email_message .= "Enviado el: " . date('d/m/Y H:i:s') . "\r\n";

    // Destino del correo
    $para = "leodiaz225@outlook.com";
    $asunto = "Mensaje de mi sitio web";

    // Enviar correo
    if (mail($para, $asunto, $email_message, $header)) {
        header("Location: index.html"); // Página de confirmación
        exit();
    } else {
        die("Error: No se pudo enviar el mensaje.");
    }
} else {
    die("Acceso no permitido.");
}
?>

