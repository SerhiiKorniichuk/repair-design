<?php

$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$userEmail = $_POST['userEmail'];
$userQuestion = $_POST['userQuestion'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';


// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->CharSet = "utf-8";
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'repairdesignsite@gmail.com';                     // SMTP username
    $mail->Password   = 'riddik10';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('repairdesignsite@gmail.com');
    $mail->addAddress('skorniychyk@gmail.com');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}. Его почта: ${userEmail}. Он хотел спросить: ${userQuestion}.";

    $mail->send();
    // echo "Письмо отправлено!";
    header('location: index.html');
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}