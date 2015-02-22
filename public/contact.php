<?php
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_message = $_POST['cf_message'];

$mail_to = 'b.annejarboe@gmail.com, dmjenn02@gmail.com';
$subject = 'Message from a cellobelle.come visitor '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. I will get back with you as soon as I am able!');
		window.location = 'contact.html';
	</script>

}
else {
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to b.annejarboe@gmail.com');
		window.location = 'contact.html';
	</script>
<?php
}
?>