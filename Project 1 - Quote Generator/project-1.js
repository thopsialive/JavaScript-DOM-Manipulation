// Variables

let btn = document.querySelector("new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");


const quotes = [{
    quote: `"I said, do you need a bowman?"`,
    person: `Bowman from Snowwhite & the Huntsman`
}, {
    quote: `"To infinity and beyond!"`,
    person: `Buzz Lightyear`
}, {
    quote: `"Fine. I'll do it myself."`,
    person: `Movie Villan`
}, {
    quote: `"Your time is limited, so don't waste it living someone else's life."`,
    person: `Steve Jobs`
}, {
    quote: `"May the force be with you."`,
    person: `Star Wars`
}, {
    quote: `"Carpe diem. Seize the day, boys. Make your lives extraordinary."`,
    person: `Mr. Keating`
}, {
    quote: `"Keep moving forward."`,
    person: `Meet the Robinsons`
}, {
    quote: `"Keep your friends close, but your enemies closer."`,
    person: `The Godfather Part II`
}, {
    quote: `"I'll be back."`,
    person: `The Terminator`
}, {
    quote: `"My mama always said life was like a box of chocolates. You never know what you're gonna get."`,
    person: `Forrest Gump`
}];

document.getElementById("new-quote").addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
