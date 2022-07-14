let apiQuotes = [];
//Show New Quote
function newQuote(){
    //Pick a Random Quote from apiQuotes awway
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
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