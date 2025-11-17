<?php
// ======= НАЛАШТУВАННЯ ========
$to = "sokolvak_ak24@nuwm.edu.ua";   // ← ТУТ ВКАЖИ СВІЙ EMAIL
$subject = "Повідомлення з контактної форми EcoWater";

// ======= ОТРИМАННЯ ДАНИХ ========
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$messageText = trim($_POST['message']);

// ======= СТВОРЕННЯ ТЕКСТУ ЛИСТА ========
$message = "Ім’я: $name\n";
$message .= "Email: $email\n\n";
$message .= "Повідомлення:\n$messageText";

// ======= ЗАГОЛОВКИ ========
$headers = "From: EcoWater <noreply@ecowater.ua>\r\n";
$headers .= "Reply-To: $email\r\n";

// ======= ВІДПРАВКА ЛИСТА ========
$success = mail($to, $subject, $message, $headers);

if ($success) {
    // Переадресація після успіху
    header("Location: notification.html");
    exit();
} else {
    echo "Помилка: Не вдалося відправити повідомлення.";
}
?>
