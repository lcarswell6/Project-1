var hit = document.getElementById("hitBtn")
var stay = document.getElementById("stayBtn")
var deal = document.getElementById("dealBtn")
var resetHand = document.getElementById("resetHandBtn")
var resetWins = document.getElementById("resetWinsBtn")
var playerHand = [];
var dealerHand = [];
var playerTotal = 0;
var dealerTotal = 0;



// card variables to build deck
var deck = newArray();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

//function to create deck 
function createDeck() {
    deck = newArray();
    for (var i = 0; i < values.length; i++) {
        for (var j = 0; j < suits.length; j++) {
            var weight = parseInt(values[i]);
            if (values[i] === "J" || "Q" || "K")
                weight = 10;
            if (values[i] === "A")
                weight = 1;
            var card = { Value: values[i], Suit: suits[j], Weight: weight };
            deck.push(card);
        }
    }
}

function deal() {
        for (let i = 0; i < 2; i++) {
            playerHand.push(deck[Math.floor(Math.random() * (deck.length - 0)) + 0]);
            
            dealerHand.push(deck[Math.floor(Math.random() * (deck.length - 0)) + 0]);
        }
        console.log("Here's your hand: " + JSON.stringify(playerHand));
        console.log("Dealer's hand: " + JSON.stringify(dealerHand));
