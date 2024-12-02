<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', '/path/to/error.log');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode([
            'error' => 'All fields are required',
        ]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode([
            'error' => 'Invalid email address',
        ]);
        exit;
    }

    $to = "oyetech30@gmail.com";
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $header = "From: $email\r\n";

    if (mail($to, $subject, $body, $header)) {
        http_response_code(200);
        echo json_encode([
            'message' => 'Email sent successfully',
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'error' => 'Failed to send email',
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        'error' => 'Method not allowed',
    ]);
}
