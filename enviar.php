<?php
//Llamando a los campos
$nombre = $_GET['nombre'];
$correo = $_GET['correo'];
$telefono = $_GET['telefono'];
$mensaje = $_GET['mensaje'];

//Datos para el Correo
$destinatario = "oscarbastidas91@gmail.com";
$asunto = "Contacto desde nuestra Web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n"
$carta .= "Teléfono: $telefono \n"
$carta .= "Mensaje: $mensaje";

//Enviando mensaje
mail($destinatario, $asunto, $carta); 
 ?>
