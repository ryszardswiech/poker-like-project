"use strict"

/**
 * TODO: Create deck of cards
 */

let cardDeck = [
    {"cardName": "Ace",
    "cardColor": "Clubs",
    "strength": 1
    },
    {"cardName": "2",
        "cardColor": "Clubs",
        "strength": 2
    },
    {"cardName": "3",
    "cardColor": "Clubs",
    "strength": 3
    },
    {"cardName": "4",
    "cardColor": "Clubs",
    "strength": 4
    },
    {"cardName": "5",
        "cardColor": "Clubs",
        "strength": 5
    },
    {"cardName": "6",
    "cardColor": "Clubs",
    "strength": 6
    },
    {"cardName": "7",
    "cardColor": "Clubs",
    "strength": 7
    },
    {"cardName": "8",
        "cardColor": "Clubs",
        "strength": 8
    },
    {"cardName": "9",
    "cardColor": "Clubs",
    "strength": 9
    },
    {"cardName": "10",
    "cardColor": "Clubs",
    "strength": 10
    },
    {"cardName": "Jack",
        "cardColor": "Clubs",
        "strength": 11
    },
    {"cardName": "Queen",
    "cardColor": "Clubs",
    "strength": 12
    },
    {"cardName": "King",
    "cardColor": "Clubs",
    "strength": 13
    },
    {"cardName": "Ace",
    "cardColor": "Diamonds",
    "strength": 1
    },
    {"cardName": "2",
        "cardColor": "Diamonds",
        "strength": 2
    },
    {"cardName": "3",
    "cardColor": "Diamonds",
    "strength": 3
    },
    {"cardName": "4",
    "cardColor": "Diamonds",
    "strength": 4
    },
    {"cardName": "5",
        "cardColor": "Diamonds",
        "strength": 5
    },
    {"cardName": "6",
    "cardColor": "Diamonds",
    "strength": 6
    },
    {"cardName": "7",
    "cardColor": "Diamonds",
    "strength": 7
    },
    {"cardName": "8",
        "cardColor": "Diamonds",
        "strength": 8
    },
    {"cardName": "9",
    "cardColor": "Diamonds",
    "strength": 9
    },
    {"cardName": "10",
    "cardColor": "Diamonds",
    "strength": 10
    },
    {"cardName": "Jack",
        "cardColor": "Diamonds",
        "strength": 11
    },
    {"cardName": "Queen",
    "cardColor": "Diamonds",
    "strength": 12
    },
    {"cardName": "King",
    "cardColor": "Diamonds",
    "strength": 13
    },
    {"cardName": "Ace",
    "cardColor": "Hearts",
    "strength": 1
    },
    {"cardName": "2",
        "cardColor": "Hearts",
        "strength": 2
    },
    {"cardName": "3",
    "cardColor": "Hearts",
    "strength": 3
    },
    {"cardName": "4",
    "cardColor": "Hearts",
    "strength": 4
    },
    {"cardName": "5",
        "cardColor": "Hearts",
        "strength": 5
    },
    {"cardName": "6",
    "cardColor": "Hearts",
    "strength": 6
    },
    {"cardName": "7",
    "cardColor": "Hearts",
    "strength": 7
    },
    {"cardName": "8",
        "cardColor": "Hearts",
        "strength": 8
    },
    {"cardName": "9",
    "cardColor": "Hearts",
    "strength": 9
    },
    {"cardName": "10",
    "cardColor": "Hearts",
    "strength": 10
    },
    {"cardName": "Jack",
        "cardColor": "Hearts",
        "strength": 11
    },
    {"cardName": "Queen",
    "cardColor": "Hearts",
    "strength": 12
    },
    {"cardName": "King",
    "cardColor": "Hearts",
    "strength": 13
    },
    {"cardName": "Ace",
    "cardColor": "Spades",
    "strength": 1
    },
    {"cardName": "2",
        "cardColor": "Spades",
        "strength": 2
    },
    {"cardName": "3",
    "cardColor": "Spades",
    "strength": 3
    },
    {"cardName": "4",
    "cardColor": "Spades",
    "strength": 4
    },
    {"cardName": "5",
        "cardColor": "Spades",
        "strength": 5
    },
    {"cardName": "6",
    "cardColor": "Spades",
    "strength": 6
    },
    {"cardName": "7",
    "cardColor": "Spades",
    "strength": 7
    },
    {"cardName": "8",
        "cardColor": "Spades",
        "strength": 8
    },
    {"cardName": "9",
    "cardColor": "Spades",
    "strength": 9
    },
    {"cardName": "10",
    "cardColor": "Spades",
    "strength": 10
    },
    {"cardName": "Jack",
        "cardColor": "Spades",
        "strength": 11
    },
    {"cardName": "Queen",
    "cardColor": "Spades",
    "strength": 12
    },
    {"cardName": "King",
    "cardColor": "Spades",
    "strength": 13
    }
]



 /**
 * TODO: Function to shuffle cards in a deck
 */

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
  }

  shuffle(cardDeck);



  
