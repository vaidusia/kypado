<?php

require("phpmailer.php");

$mail = new PHPMailer();

$mail->AddAddress("info@kypado.com"); // <<------------ YOUR ADDRESS - SET HERE YOUR EMAIL ADDRESS, TO SEND EMAILS TO.

$mail->From     = utf8_decode($_POST['email']."");
$mail->FromName = utf8_decode("Kypado page, from: ".$_POST['name']."");
$mail->Subject  = "Kypado inquery";//utf8_decode($_POST['subject'.""]);
$mail->Body     = utf8_decode($_POST['msg'].""); 
$mail->WordWrap = 50;

// $mail->IsSMTP();  // telling the class to use SMTP
// $mail->Host     = "smtp.example.com"; // SMTP server

if(!$mail->Send()) {
	echo '<div id="form-error">';
	echo 'Message was not sent.<br />'.$mail->From.'<br />';
	echo 'Mailer error: ' . $mail->ErrorInfo;
	echo '</div>';
} else {
	echo '<div id="form-ok">';
	echo 'Message has been sent.';
	echo '</div>';
}


?>