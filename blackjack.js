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

//function to deal cards
function deal() {
    createDeck();
        for (let i = 0; i < 2; i++) {
            playerHand.push(deck[Math.floor(Math.random() * deck.length)]);
            
            dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);
            
        };
        console.log(playerHand);
        console.log(dealerHand);
    };
//player hit new card 
function hit() {
    playerHand.push(deck[Math.floor(Math.random() * deck.length)]);
console.log(playerHand);
}
//functions to disable buttons
function disableDealBtn() {
    document.getElementById('dealBtn').disabled=true;
}
function disableHitBtn() {
            document.getElementById('hitBtn').disabled = true;
}
function disableStayBtn() {
    document.getElementById('stayBtn').disabled=true;
}
//player stay, dealer hit 
function stay() {
    dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);
    console.log(dealerHand);
}


//player clicks deal and both the player and dealer are dealt 2 cards. the values of each are returned and logged to console.
//
document.getElementById('dealBtn').addEventListener('click', function(){
deal();
sumPlayerTotal();
sumDealerTotal();
console.log("player total " + playerTotal);
console.log("dealer total " + dealerTotal);

if (playerTotal > 21) {
    alert("player bust. try again");
    disableHitBtn();
    disableStayBtn();
    disableDealBtn();
}
})

//player clicks hit to get another card. player total value is returned and logged to console.
//after hit is clicked, the deal button is disabled to prevent extra values from being added to player and dealer values 
//if player total vlaue is > 21, a "loss" alert will pop up    
document.getElementById('hitBtn').addEventListener('click', function(){
    hit();
    disableDealBtn();
    //new player total after each hit 
    playerTotal += playerHand[(playerHand.length - 1)].weight;
        console.log("player total " + playerTotal);

    //player BUST
    if (playerTotal > 21){
        disableStayBtn();
        disableHitBtn();
        alert("PLAYER BUST! You lose, friggin' loser!")
    }
}); 

//player clicks stay button to keep his value and force dealer to act.
//the button click disables the hit and deal buttons to prevent accidental data entry
//function then checks for inital win possibilties before returning a new dealer value
//if there is no win condition, dealer draws until a win condition is reached
document.getElementById('stayBtn').addEventListener('click', function(){
    disableHitBtn();  
      disableDealBtn();
      
      if (dealerTotal > 21 && playerTotal <= 21) {
        alert("you win. dealer busts with " + dealerTotal);
        disableStayBtn();
      } else if (dealerTotal < 21 && playerTotal < 21 && playerTotal === dealerTotal){
            alert("PUSH! Try again!");
            disableStayBtn();
            } else if (dealerTotal < 17 && playerTotal < 17 && dealerTotal > playerTotal) {
        alert("dealer wins with " + dealerTotal);
        disableStayBtn();
      } else if (dealerTotal < 17 && playerTotal < 17 && dealerTotal < playerTotal) {
          alert("player wins with " + playerTotal);
          disableStayBtn();
      } else if (dealerTotal < 17) {
          stay();
      }
      
      
            //new dealer total after stay function runs
      dealerTotal += dealerHand[(dealerHand.length - 1)].weight;
        console.log("dealer total " + dealerTotal);
 
    });

//sum total of player hand
function sumPlayerTotal () {
for ( var i = 0; i < playerHand.length; i++){
    playerTotal += playerHand[i].weight;
    }
        return playerTotal;
}

//sum dealer total 
function sumDealerTotal () {
    for ( var i = 0; i < dealerHand.length; i++){
        dealerTotal += dealerHand[i].weight;
        }
            return dealerTotal;
}

//reset hand with reload button 
function reloadPage(){
    window.location.reload();
 }

 document.getElementById('resetHandBtn').addEventListener('click', function() {
     reloadPage();
 });
