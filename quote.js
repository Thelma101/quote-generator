const quoteContainer  = document.getElementById('quote-container');
const quoteText  = document.getElementById('quote');
const authorText  = document.getElementById('author');
const twitterBtn  = document.getElementById('twitter');
const newQuoteBtn  = document.getElementById('new-quote');
const quoteIcon  = document.querySelector('.quote-icon i');

//   Undo for API Fetch   // let apiQuotes = [];
let localQuotes = [];

function changeColor(){
    const icon = document.querySelector('.quote-icon');
    const color = '#' + (Math.floor(Math.random() * 16777215).toString(16));
    icon.style.color = color;
    
}

// Show New Quote
function newQuote() {
//   Undo for API Fetch  // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]

    if (!quote.author){
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote Length
    if (quote.text.length > 150){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
} 
// Get Quotes From API
// //   Undo for API Fetch  async function getQuote(){
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // Catch Error

//     }
// }


// Get Quotes locally
 async function newQuoteFetch(){
     const localQuotesURL = 'localQuotes.json'
    try {
        const response = await fetch(localQuotesURL);
        localQuotes = await response.json();
        newQuote();
        changeColor();
    } catch (error) {
        // Catch Error

    }
}

    
// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https:/twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
    newQuoteBtn.addEventListener('click', newQuoteFetch);
    twitterBtn.addEventListener('click', tweetQuote);


//On Load
//   Undo for API Fetch   // getQuote();
newQuoteFetch();