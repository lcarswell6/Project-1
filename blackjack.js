var dealBtn = document.getElementById("dealBtn")
var hitBtn = document.getElementById("hitBtn")
var stayBtn = document.getElementById("stayBtn")
var resetHandBtn = document.getElementById("resetHandBtn")
var resetWinsBtn = document.getElementById("resetWinsBtn")
var playerHand = [];
var dealerHand = [];
var playerTotal = 0;
var dealerTotal = 0;
var deck = [];


// card variables to build deck
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10 , "J", "Q", "K"];


//function to create deck 
function createDeck() {
    for (var i = 0; i < values.length; i++) {
        for (var j = 0; j < suits.length; j++) {
            const value = values[i];
            var weight = parseInt(value);
            if (value === "J" ||value === "Q" || value === "K"){
                weight = 10;}
            if (value === "A"){
                weight = 11;
            }
            var card = { Value: values[i], Suit: suits[j], weight: weight };
            deck.push(card);
        }
    }
    return deck;
}
//dealing cards
function deal() {
    createDeck();
        for (let i = 0; i < 2; i++) {
            playerHand.push(deck[Math.floor(Math.random() * deck.length)]);
            
            dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);
            
        };
        console.log(playerHand);
        console.log(dealerHand);
    };

document.getElementById('dealBtn').addEventListener('click', function(){
deal();
})


//player hit new card 
function hit() {
    playerHand.push(deck[Math.floor(Math.random() * deck.length)]);
console.log(playerHand);
}

document.getElementById('hitBtn').addEventListener('click', function(){
hit();
}) 

//dealer hit 
function hit() {
    dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);
console.log(dealerHand);
}
document.getElementById('stayBtn').addEventListener('click', function(){
    hit();
})