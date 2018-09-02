var socket = io();

// Escuchar   
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conección con el servidor');
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Miguel',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});