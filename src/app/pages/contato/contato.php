<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);


    $firstName = $data['firstName']; 
    $lastName = $data['lastName'];
    $email = $data['email'];
    $phone = $data['phone'];
    $city = $data['city'];
    $message = $data['message'];

    $to = "instrutoralaryssa@gmail.com";
    $subject = "Novo contato de $firstName $lastName";
    $body = "Nome: $firstName $lastName\nEmail: $email\nTelefone: $phone\nCidade: $city\nMensagem:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Email enviado com sucesso."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Erro ao enviar o email."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Método não permitido."]);
}
?>
