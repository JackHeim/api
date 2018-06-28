let url = "http://api.funtranslations.com/translate/yoda.json/"
const searchTerm = document.querySelector('.translate');
const searchForm = document.querySelector('form');
const section = document.querySelector('section');
searchForm.addEventListener("submit", fetchResults);

function fetchResults(e) {
    e.preventDefault();
    url += '?text=' + searchTerm.value;
    fetch(url)
        .then(function (results) {
            return results.json();
        })
        .then(function (json) {
            console.log(json)
            displayResults(json);
        });
}



function displayResults (results) {
    console.log(results.contents.translated)
    

    let translated = document.createElement("p");

    translated.textContent = results.contents.translated;

    section.appendChild(translated);

}