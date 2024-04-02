
document.addEventListener('DOMContentLoaded', function() {
    // Llamar a la función translatePage al cargar la página
    translatePage();

    // Función para traducir el contenido de los HTML secundarios
    function translatePage() {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        if (storedLanguage) {
            // Traducir elementos según el idioma almacenado
            const elementsToTranslate = document.querySelectorAll('[data-translate]');
            elementsToTranslate.forEach(element => {
                const originalText = element.dataset.translate;
                googleTranslate(originalText, storedLanguage)
                    .then(translation => {
                        element.textContent = translation;
                    })
                    .catch(error => {
                        console.error('Translation Error:', error);
                    });
            });
        }
    }

    // Función para traducir una cadena de texto utilizando Google Translate API
    async function googleTranslate(text, targetLanguage) {
        const response = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`
        );
        const data = await response.json();

        let translatedText = '';
        data[0].forEach(part => {
            translatedText += part[0];
        });

        return translatedText;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('DOMContentLoaded', (event) => {
        translatePage();
    });

    var name2 = document.getElementById('name2');
    var description = document.getElementById('description');
    var icons = document.querySelector('.icon-container');
    var buttons = document.querySelectorAll('.button-container button');

})
 