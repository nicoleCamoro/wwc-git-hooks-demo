const buttonEl = document.getElementById('btnQuote');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

getQuote();
buttonEl.onclick = getQuote;

function getQuote() {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
        .then(result => result.json())
        .then(result => {
            // console.log(result);
            quoteEl.innerHTML = result.en;
            // authorEl.innerHTML = result.author;
            authorEl.innerHTML = 'franchette camoro';
        })
        .catch(err => {
            // console.log(err);
            alert(err);
        });
}
