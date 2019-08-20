'use strict';

let players, playersNumber, player1, player2, drawnedCard, round;
players = [];
round = 0;

/****************************
 *! Create deck of cards
 ***************************/

let cardDeck = [
  { cardName: 'Ace', cardColor: 'Clubs', strength: 1 },
  { cardName: '2', cardColor: 'Clubs', strength: 2 },
  { cardName: '3', cardColor: 'Clubs', strength: 3 },
  { cardName: '4', cardColor: 'Clubs', strength: 4 },
  { cardName: '5', cardColor: 'Clubs', strength: 5 },
  { cardName: '6', cardColor: 'Clubs', strength: 6 },
  { cardName: '7', cardColor: 'Clubs', strength: 7 },
  { cardName: '8', cardColor: 'Clubs', strength: 8 },
  { cardName: '9', cardColor: 'Clubs', strength: 9 },
  { cardName: '10', cardColor: 'Clubs', strength: 10 },
  { cardName: 'Jack', cardColor: 'Clubs', strength: 11 },
  { cardName: 'Queen', cardColor: 'Clubs', strength: 12 },
  { cardName: 'King', cardColor: 'Clubs', strength: 13 },
  { cardName: 'Ace', cardColor: 'Diamonds', strength: 1 },
  { cardName: '2', cardColor: 'Diamonds', strength: 2 },
  { cardName: '3', cardColor: 'Diamonds', strength: 3 },
  { cardName: '4', cardColor: 'Diamonds', strength: 4 },
  { cardName: '5', cardColor: 'Diamonds', strength: 5 },
  { cardName: '6', cardColor: 'Diamonds', strength: 6 },
  { cardName: '7', cardColor: 'Diamonds', strength: 7 },
  { cardName: '8', cardColor: 'Diamonds', strength: 8 },
  { cardName: '9', cardColor: 'Diamonds', strength: 9 },
  { cardName: '10', cardColor: 'Diamonds', strength: 10 },
  { cardName: 'Jack', cardColor: 'Diamonds', strength: 11 },
  { cardName: 'Queen', cardColor: 'Diamonds', strength: 12 },
  { cardName: 'King', cardColor: 'Diamonds', strength: 13 },
  { cardName: 'Ace', cardColor: 'Hearts', strength: 1 },
  { cardName: '2', cardColor: 'Hearts', strength: 2 },
  { cardName: '3', cardColor: 'Hearts', strength: 3 },
  { cardName: '4', cardColor: 'Hearts', strength: 4 },
  { cardName: '5', cardColor: 'Hearts', strength: 5 },
  { cardName: '6', cardColor: 'Hearts', strength: 6 },
  { cardName: '7', cardColor: 'Hearts', strength: 7 },
  { cardName: '8', cardColor: 'Hearts', strength: 8 },
  { cardName: '9', cardColor: 'Hearts', strength: 9 },
  { cardName: '10', cardColor: 'Hearts', strength: 10 },
  { cardName: 'Jack', cardColor: 'Hearts', strength: 11 },
  { cardName: 'Queen', cardColor: 'Hearts', strength: 12 },
  { cardName: 'King', cardColor: 'Hearts', strength: 13 },
  { cardName: 'Ace', cardColor: 'Spades', strength: 1 },
  { cardName: '2', cardColor: 'Spades', strength: 2 },
  { cardName: '3', cardColor: 'Spades', strength: 3 },
  { cardName: '4', cardColor: 'Spades', strength: 4 },
  { cardName: '5', cardColor: 'Spades', strength: 5 },
  { cardName: '6', cardColor: 'Spades', strength: 6 },
  { cardName: '7', cardColor: 'Spades', strength: 7 },
  { cardName: '8', cardColor: 'Spades', strength: 8 },
  { cardName: '9', cardColor: 'Spades', strength: 9 },
  { cardName: '10', cardColor: 'Spades', strength: 10 },
  { cardName: 'Jack', cardColor: 'Spades', strength: 11 },
  { cardName: 'Queen', cardColor: 'Spades', strength: 12 },
  { cardName: 'King', cardColor: 'Spades', strength: 13 }
];

/**
 *! SHUFFLING CARDS
 */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
}

console.log(cardDeck); // show card deck before shuffling

// shuffles the cards after clicking the button
const BUTTON_SHUFFLE = document.getElementById('button-shuffle');
BUTTON_SHUFFLE.addEventListener('click', function() {
  shuffle(cardDeck);
  console.log(cardDeck);
});

/**
 *!      ASK HOW MANY PLAYERS WILL PLAY THE GAME
 **/
const BUTTON_NUMBER = document.getElementById('button-number');
BUTTON_NUMBER.addEventListener('click', function() {
  const playersNumber = prompt('How many players will want to play poker?');
  console.log(playersNumber);
  for (var i = 1; i <= playersNumber; i++) {
    players.push([]);
  }
});

/**
 *!      DRAW FIRST TWO CARDS FOR ALL PLAYERS
 **/

const BUTTON_ROUND = document.getElementById('button-round');

function dealCards() {
  if (round == 0) {
    // PRE-FLOP, we deal two cards for every player
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < players.length; j++) {
        players[j].push(cardDeck.shift());
      }
    }
    round++;
  } else if (round > 0 && round <= 3) {
    //
    for (let j = 0; j < players.length; j++) {
      players[j].push(cardDeck.shift());
    }
    round++;
  } else console.log('There are no more rounds');
}

BUTTON_ROUND.addEventListener('click', dealCards);
