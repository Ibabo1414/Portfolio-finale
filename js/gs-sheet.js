const scriptURL = 'https://script.google.com/macros/s/AKfycbwhHb85DlY2kvnDc-v4DFJXh-zEG4gnpJO6V2lN-eao53P2_fPd/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Félication, votre requêtte à bien été enregistrer ! Vous pouvez nous contacter au 077 76 25 56"))
        .catch(error => console.error('Error!', error.message))
})