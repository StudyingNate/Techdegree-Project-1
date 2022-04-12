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
let randomNumber;
var quotes = [
  {
    quote: "The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.",
    source: "Full Metal Alchemist",
    citation: "Roy Mustang",
    year: 4321,
    tags: "anime",
  },
  {
    quote: "If you don’t take risks, you can’t create a future!",
    source: 'One Piece',
    citation: "Monkey D. Luffy",
    year: 1234,
    tags: "Anime"
  },
  {
    quote: "“People, who can’t throw something important away, can never hope to change anything.”",
    source: '(Shingeki no Kyojin / Attack on Titan)',
    citation: " — Armin Arlert ",
    year: 1234,
    tags: "anime"
  },
  {
    quote: 'Macintosh',
    source: 'Red',
    citation: "ME my",
    year: 1234,
    tags: "anime"
  },
  {
    quote: 'Macintosh',
    source: 'Red',
    citation: "yahallo",
    year: 1234,
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
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);