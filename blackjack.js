//dom elements
/*var hit = document.getElementById("hitBtn")
var stay = document.getElementById("stayBtn")
var deal = document.getElementById("dealBtn")
var resetHand = document.getElementById("resetHandBtn")
var resetWins = document.getElementById("resetWinsBtn")
var login = document.getElementById("logInBtn")
var logout = document.getElementById("logOutBtn")*/

// card variables to build deck
var deck = newArray();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//function to create deck 
function createDeck() {
    deck = newArray();
    for (var i = 0; i < values.length; i++) {
        for (var j = 0; j < suits.length; j++) {
            var weight = parseInt(values[i]);
            if (values[i] == "J" || "Q" || "K")
                weight = 10;
            if (values[i] == "A")
                weight == 11;
            var card = { Value: values[i], Suit: suits[j], Weight: weight };
            deck.push(card);
        }
    }
}

//players
var players = new Array();
function createPlayers(num) {
    players = new Array();
    for (var i = 1; i <= num; i++) {
        var hand = new Array();
        var player = { Name: 'Player' + i, ID: i, Points: 0, Hand: hand };
        players.push(player);
    }
}

//deal 
function dealHands() {
    for (var i = 0; i < 2; i++) {
        for (var x = 0; x < players.length; x++) {
            var card = deck.pop();
            players[x].Hand.push(card);
            renderCard(card, x);
            updatePoints();
        }
    }
    updateDeck();
}