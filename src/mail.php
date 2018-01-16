
<?php
$to      = '';
$subject = 'Заявка с сайта';
$message = 'Заявка.  Имя: ' . $_POST["name"] . ' Телефон: ' . $_POST["phone"] . ' Email: ' . $_POST["email"] ;
$headers = 'From: admin@strogo-boots.ru' . "\r\n" .
    'Content-Type: text/plain; charset=utf8;' . "\r\n" .
    'Reply-To: admin@strogo-boots.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>
