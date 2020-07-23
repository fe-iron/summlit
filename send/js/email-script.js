
const scriptURL = 'https://script.google.com/macros/s/AKfycbxgP7XMQU4mO-fw3rKQrkiaF9T7FDNEPbSFw1nUY5VNGYhFDmc/exec'
const form = document.forms['Emails for summlit']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', mode:'no-cors', body: new FormData(form)}).then(response => alert("Thanks for Contacting us..! We Will Contact You Soon...")).catch(error => console.error('Error!', error.message))
})
