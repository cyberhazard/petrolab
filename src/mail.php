
<?php
$to      = 'email@mail.ru';
$subject = 'Заявка на консультацию с сайта PETROLAB';
$message = 'Заявка.  Имя: ' . $_POST["name"] . ' Телефон: ' . $_POST["tel"] . ' Сообщение: ' . $_POST["text"] ;
$headers = 'From: admin@petrolab.ru' . "\r\n" .
    'Content-Type: text/plain; charset=utf8;' . "\r\n" .
    'Reply-To: admin@petrolab.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>
