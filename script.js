const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];
//Show New Quote
function newQuote(){
    //Pick a Random Quote from apiQuotes awway
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    //Check if Author field is blank and replace with 'Unknown'

    if (!quote.author){
        authorText.textContent = 'Unknown';
    } else {
      authorText.textContent = quote.author;
    
}
//Check Quote Length to determine styling

    if (quote.text.length > 120){
        quoteText.classList.add('long-quote')
    }else{
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;
}
// Get Quotes from API
async function getQuotes(){
const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //Catch Error Here
    }

}

//On Load
getQuotes();