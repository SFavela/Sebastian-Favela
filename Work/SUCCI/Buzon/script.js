tinymce.init({
    selector: '#editor',
    plugins: 'bold italic underline strikethrough | bullist numlist image media',
    toolbar_mode: 'floating',
    images_upload_handler: function (blobInfo, success, failure) {
        // Aquí puedes implementar la lógica para subir imágenes al servidor
    },
    file_picker_callback: function (callback, value, meta) {
        if (meta.filetype === 'media') {
            // Implementa la lógica para seleccionar y cargar archivos de medios (videos y audio)
        } else {
            // Implementa la lógica para seleccionar y cargar otros tipos de archivos
        }
    },
});

  

// Agrega un controlador de eventos para el formulario
document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    // Aquí puedes agregar el código para manejar el envío del formulario
});