/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * List of quotes from animes that are from characters that I've enjoyed watching over the years.
***/
let quotes = [
  {
    quote: "The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.",
    source: "Full Metal Alchemist",
    citation: "Roy Mustang",
    year: 2003,
    tags: `#anime #hope`
  },
  {
    quote: "If you don’t take risks, you can’t create a future!",
    source: "Monkey D. Luffy",
    citation: "", //Tests the if statement in 'printQuote' will display the citation if left blank.
    year: 1999,
    tags: `#anime #motivational`

  },
  {
    quote: "People, who can’t throw something important away, can never hope to change anything.",
    source: "Armin Arlert",
    citation: "(Shingeki no Kyojin / Attack on Titan)",
    year: 2013,
    tags: `#anime #leadership`
  },
  {
    quote: "If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don’t need them and their selfish ideas.",
    source: "Alibaba Saluja",
    citation: "Magi",
    year: "", //Tests the if statement in 'printQuote' will display the year if left blank.
    tags: `#anime #fantasy`

  },
  {
    quote: "Who decides limits? And based on what? You said you worked hard? Well, maybe you need to work a little harder. Is that really the limit of your strength? Could you of tomorrow beat you today? Instead of giving in, move forward.",
    source: "Saitama",
    citation: "One Punch Man",
    year: 2015,
    tags: `#anime #hero`
  }
];


/***
 * `getRandomQuote` function
 * Simple function that will use a random number generator based on the 'arr.length' that will display a quote.
***/
const getRandomQuote = (arr) => {
let randomNumber = Math.floor(Math.random() * arr.length);
  return quotes[randomNumber];

}


/***
 * `printQuote` function
 * Creates the HTML quote structure using Object Literals and while assigning it a background color.
 * If statements to check if quote has a citation or year to add to the quote structure.
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

  html += `<span class="tags"> ${animeQuote.tags} </span></p>`;
  
  document.getElementById('quote-box').innerHTML = html; 
  document.body.style.backgroundColor = randomRGB();

}

/***
 * `randomRGB` function
 * Simply creates a random color that was learned from the Refactoring Challenge videos. 
 * Creates a random number to be plugged into the randomRGB function to return a random color.
***/
const randomColor = () => Math.floor(Math.random() * 256);

let randomRGB = () => {
  const color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  return color;
}

/***
 * `changeQoute` function
 * Created a brand new function that gathers 'printQuote' and 'randomRGB' to be called in 'setInterval'
 * Both qoute and the background color will be changed during the 20 second interval.
***/
const changeQuote = () => {
printQuote();
randomRGB();
}

setInterval(changeQuote(), 20000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);