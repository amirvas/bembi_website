<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "5472008470:AAFrmhWXPaBxiYg6QXiVZ93zNV5-2uL8ueg";
$chat_id = "-703247948";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thanks.html');
} else {
  echo "Error";
}

?>


