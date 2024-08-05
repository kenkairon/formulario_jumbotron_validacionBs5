// Ejemplo de JavaScript para deshabilitar el envío de formularios si hay campos inválidos
(function () {
    'use strict' // Activa el modo estricto de JavaScript

    // Selecciona todos los formularios que queremos aplicar estilos de validación personalizados de Bootstrap
    var forms = document.querySelectorAll('.needs-validation')

    // Convierte el NodeList de formularios en un array y recórrelo
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            // Añade un evento de escucha para el evento 'submit' en cada formulario
            form.addEventListener('submit', function (event) {
                // Verifica si el formulario es válido
                if (!form.checkValidity()) {
                    // Si el formulario no es válido, previene el envío del formulario
                    event.preventDefault()
                    // Detiene la propagación del evento
                    event.stopPropagation()
                }

                // Añade la clase 'was-validated' al formulario para aplicar los estilos de validación de Bootstrap
                form.classList.add('was-validated')
            }, false) // El 'false' indica que no se usa captura de eventos
        })
})() // Llama a la función inmediatamente
