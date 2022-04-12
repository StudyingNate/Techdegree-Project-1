/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: "The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.",
    source: "Full Metal Alchemist",
    citation: "Roy Mustang",
    year: 2003,
    tags: "anime",
  },
  {
    quote: "If you don’t take risks, you can’t create a future!",
    source: "One Piece",
    citation: "Monkey D. Luffy",
    year: 1999,
    tags: ""
  },
  {
    quote: "People, who can’t throw something important away, can never hope to change anything.",
    source: '(Shingeki no Kyojin / Attack on Titan)',
    citation: "Armin Arlert ",
    year: 2013,
    tags: "anime"
  },
  {
    quote: "If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don’t need them and their selfish ideas.",
    source: "Magi",
    citation: "Alibaba Saluja",
    year: 2012,
    tags: "anime"
  },
  {
    quote: "Who decides limits? And based on what? You said you worked hard? Well, maybe you need to work a little harder. Is that really the limit of your strength? Could you of tomorrow beat you today? Instead of giving in, move forward.",
    source: "One Punch Man",
    citation: "Saitama ",
    year: 2015,
    tags: "anime"
  }
];


/***
 * `getRandomQuote` function
***/
const getRandomQuote = (arr) => {
let randomNumber = Math.floor(Math.random() * arr.length);
  return quotes[randomNumber];

}


/***
 * `printQuote` function
***/
const printQuote = () => {
  let animeQuote = getRandomQuote(quotes);
  let html = `
  <p class="quote"> ${animeQuote.quote} </p>
  <p class="source"> ${animeQuote.source} `;

  if (animeQuote.citation) {
  html += `<span class="citation"> ${animeQuote.citation} </span>`
  }
  if (animeQuote.year){
  html += `<span class="year"> ${animeQuote.year} </span>` 
  }

  html += `</p>`;
  
  document.getElementById('quote-box').innerHTML = html; 

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);