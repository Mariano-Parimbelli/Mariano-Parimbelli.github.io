

document.addEventListener('DOMContentLoaded', function() {
    var name2 = document.getElementById('name2');
    var description = document.getElementById('description');
    var icons = document.querySelector('.icon-container');
    var buttons = document.querySelectorAll('.button-container button');

    // Ocultar los elementos inicialmente
    name2.style.opacity = '0';
    description.style.opacity = '0';
    icons.style.opacity = '0';
    buttons.forEach(function(button) {
        button.style.opacity = '0';
    });

    // Retrasar la aparición de los elementos en 3 segundos
    setTimeout(function() {
        // Mostrar los elementos con transición suave
        name2.style.transition = 'opacity 1s ease';
        description.style.transition = 'opacity 1s ease';
        icons.style.transition = 'opacity 1s ease';
        buttons.forEach(function(button) {
            button.style.transition = 'opacity 1s ease';
        });

        name2.style.opacity = '1';
        description.style.opacity = '1';
        icons.style.opacity = '1';
        buttons.forEach(function(button) {
            button.style.opacity = '1';
        });
    }, 1500);

    // Función para mostrar el contenido relacionado con el botón clicado y desactivar otros botones activos
    function showContent(contentId) {
        // Ocultar todos los contenidos
        const contents = document.querySelectorAll('.sobre-mi-container, .competencias-container, .project-wrapper, .pdf-container');
        contents.forEach(content => {
            content.classList.add('hidden');
        });

        // Mostrar el contenido deseado
        const content = document.getElementById(contentId);
        if (content) {
            content.classList.remove('hidden');
        }

        // Desactivar otros botones activos
        buttons.forEach(function(button) {
            if (button.id !== contentId + '-btn') {
                button.disabled = false;
            }
        });
    }

    // Agregar el event listener para cada botón
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Desactivar otros botones activos
            buttons.forEach(function(btn) {
                if (btn !== button) {
                    btn.disabled = false;
                }
            });

            // Activar el botón clicado
            button.disabled = true;

            // Mostrar el contenido asociado al botón clicado
            var contentId = button.id.replace('-btn', '');
            console.log('Mostrar contenido para:', contentId);
            showContent(contentId);
        });
    });

// Event listener para el botón de Proyectos
document.getElementById('proyectos-btn').addEventListener('click', function() {
    var projects = document.querySelectorAll('.project-container');
    console.log('Mostrar proyectos');
    displayProjectsSequentially(projects, 0);
});

document.getElementById('instagram-icon').addEventListener('click', function() {
    window.open('https://www.instagram.com/mariano_parimbelli/', '_blank');
});

// Event listener para el icono de LinkedIn
document.getElementById('linkedin-icon').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/mariano-leandro-parimbelli-680822a0/', '_blank');
});

// Event listener para el icono de WhatsApp
document.querySelector('.whatsapp-icon').addEventListener('click', function() {
    window.open('https://wa.me/+543544620335', '_blank');
});

// Event listener para el icono de GitHub
document.getElementById('github-icon').addEventListener('click', function() {
    window.open('https://github.com/mariano4659/Projects', '_blank');
});



    // Event listener para el botón de Currículum PDF
    document.getElementById("curriculum-btn").addEventListener("click", function() {
        console.log('Botón de Currículum PDF clicado');
        var pdfContainer = document.querySelector('.pdf-container');
        var pdfViewer = document.getElementById('pdf-viewer');

        if (pdfContainer.classList.contains('hidden')) {
            pdfContainer.classList.remove('hidden');
            pdfViewer.src = 'https://drive.google.com/file/d/1eH2KC4GTPyf-fnPUMccPkbB_93CM2bxZ/preview'; // Reemplaza ID_DEL_ARCHIVO con el ID real de tu archivo
            pdfContainer.classList.add('fade-in'); // Agregar clase para efecto de aparición
        } else {
            pdfContainer.classList.remove('fade-in'); // Remover clase para efecto de aparición
            pdfContainer.classList.add('fade-out'); // Agregar clase para efecto de desaparición

            setTimeout(function() {
                pdfContainer.classList.add('hidden'); // Ocultar el contenedor después de la transición
                pdfViewer.src = ''; // Limpiar la fuente del visor PDF
                pdfContainer.classList.remove('fade-out'); // Remover clase para efecto de desaparición
            }, 500); // El tiempo debe coincidir con la duración de la transición CSS
        }
    });

    function displayProjectsSequentially(projects, index) {
        if (index < projects.length) {
            setTimeout(function() {
                projects[index].style.display = 'flex'; // Mostrar el contenedor de proyectos actual
                projects[index].classList.add('show'); // Agregar la clase show para mostrar el proyecto
                displayProjectsSequentially(projects, index + 1); // Llamar recursivamente para el siguiente proyecto
            }, 200); // Retraso de 0.2 segundos
        }
    }
    
     // Obtener todos los contenedores de proyectos
     var projectContainers = document.querySelectorAll('.project-container');

     // Iterar sobre cada contenedor de proyecto
     projectContainers.forEach(function(container) {
         // Agregar un event listener para el clic en cada contenedor
         container.addEventListener('click', function() {
             // Obtener el ID del contenedor de proyecto clicado
             var projectId = this.id;
 
             // Redirigir a la página correspondiente según el ID del proyecto
             switch (projectId) {
                 case 'project1':
                     window.location.href = 'proyectos/clasificador_de_botellas.html';
                     break;
                 case 'project2':
                     window.location.href = 'proyectos/Asistente_virtual.html';
                     break;
                 case 'project3':
                     window.location.href = 'proyectos/Analisis_de_sentimientos.html';
                     break;
                case 'project4':
                    window.location.href = 'proyectos/youtube_transcript.html';
                    break;
                     
                 default:
                     // Redirigir a una página de error o realizar alguna acción predeterminada
                     break;
             }
         });   
    });
});
