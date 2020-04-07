<html>
<head>
<title>My First HTML web page</title>
<?php
echo $_GET["name"];
?>
</head>
<body>

<FORM name="form1" action="action_page.php" method="GET">

Name : <input type="text" name="name"><br>
Password : <input type="text" name="city"><br>

<input type="text" id="fname" name="firstname" placeholder="Vorname..">

  
<input type="text" id="lname" name="lastname" placeholder="Nachname..">


<input type="text" id="firm" name="Firma" placeholder="Firma..">


<input type="number" id="phone" name="phone" placeholder="Telefonnummer.." style=" width:49%; height: 40px; padding: 12px; margin-top: 6px; margin-bottom: 10px;">


<input type="email" id="email" name="email" placeholder="Email.." style="margin-left: 10px; width:49.7%; height: 40px; padding: 12px;">


<textarea id="subject" name="Nachricht" placeholder="Nachricht.." style="height:140px"></textarea>

<input type="submit" value="Senden">

</FORM>

</body>
</html>