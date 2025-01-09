//Elementi del DOM
const emailListElm = document.getElementById('email-list')
const emailBtnElm = document.getElementById('email-btn')

//Funzione per generare le email
function generateEmail() {
    emailListElm.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response) {
            emailListElm.innerHTML += `<li>${response.data.response}</li>`;
        })
    }
}

generateEmail();

//Generazione delle email quando si clicca sul bottone
emailBtnElm.addEventListener('click', generateEmail);