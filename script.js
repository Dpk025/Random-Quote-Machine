const projectName = "randomQuoteMahine";


const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
]
const allQuotes = {
    "quotes": [
        {
            "quote": "Life isn't about getting and having, it's about giving and being.",
            "author": "Kevin Kruse"
        },
        {
            "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
            "author": "Napoleon Hill"
        },
        {
            "quote": "Strive not to be a success, but rather to be of value.",
            "author": "Albert Einstein"
        },
        {
            "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
            "author": "Robert Frost"
        },
        {
            "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
            "author": "Robert Frost"
        },
        {
            "quote": "I attribute my success to this: I never gave or took any excuse.",
            "author": "Florence Nightingale"
        },
        {
            "quote": "You miss 100% of the shots you don't take.",
            "author": "Wayne Gretzky"
        },
        {
            "quote": "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "author": "Michael Jordan"
        },
        {
            "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.", "author": "Amelia Earhart"
        },
        {
            "quote": "Every strike brings me closer to the next home run.", "author": "Babe Ruth"
        },
        {
            "quote": "Definiteness of purpose is the starting point of all achievement.", "author": "W. Clement Stone"
        },
        {
            "quote": "We must balance conspicuous consumption with conscious capitalism.", "author": "Kevin Kruse"
        },
        {
            "quote": "Life is what happens to you while you're busy making other plans.", "author": "John Lennon"
        },
        {
            "quote": "We become what we think about.", "author": "Earl Nightingale"
        }
    ]
}
let currentQuote = "";
let currentAuthor = "";
// function getQuotes(){
//   return $.ajax({
//     headers: {
//       Accept: 'application/json'
//     },
//         url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
//        sucess: function(jsonQuotes){
//          if(typeOf jsonQuotes==='string'){
//            quotesData=JSON.parse(jsonQuotes);     // object having array of all Quotes and author store
//            console.log('quotesData');
//            console.log(quotesData);
//          }
//        } 
//   });
// }
function getRandomQuote() {
    return allQuotes.quotes[
        Math.floor(Math.random() * allQuotes.quotes.length)
    ]
}

function getQuote() {
    let randomQuote = getRandomQuote();
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;
    console.log(currentQuote);
    console.log(currentAuthor);

    $('#quote-text').animate({ opacity: 1 }, 500, function () {
        $(this.animate({ opacity: 0 }), 500);
        $('#text').text(randomQuote.quote);
    });

    $('#quote-author').animate({ opacity: 1 }, 500, function () {
        $(this.animate({ opacity: 0 }), 500);
        $('#author').text(randomQuote.author);
    });

    var color = Math.floor(Math.random() * colors.length);

    $(' body').animate({
        backgroundColor: colors[color],
        color: colors[color]
    }, 1000);

    $('button').animate({
        backgroundColor: colors[color]
    }, 1000);
}
$(document).ready(function () {
    $('#new-quote').on('click', getQuote);
});

