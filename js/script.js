const cardsContainer =  document.querySelector('.cards-container');
const gameStateMsg = document.querySelector('.game-state-msg');
const playBtn = document.querySelector('.play-btn');
const newCardBtn = document.querySelector('.new-card-btn');
const rulesBtn = document.querySelector('.rules-btn');
const rulesSection = document.querySelector('.rules');
const cardDeck = [
    '1c.png','2c.png','3c.png','4c.png','5c.png','6c.png','7c.png','8c.png','9c.png',
    '10c.png','11c.png','12c.png','13c.png',
    '1h.png','2h.png','3h.png','4h.png','5h.png','6h.png','7h.png','8h.png','9h.png',
    '10h.png','11h.png','12h.png','13h.png',
    '1p.png','2p.png','3p.png','4p.png','5p.png','6p.png','7p.png','8p.png','9p.png',
    '10p.png','11p.png','12p.png','13p.png',
    '1t.png','2t.png','3t.png','4t.png','5t.png','6t.png','7t.png','8t.png','9t.png',
    '10t.png','11t.png','12t.png','13t.png'
];
let playerCards = [];
let isPlaying = false;
let hasBlackJack = false;
let rulesVisible = false;
let message = "";


playBtn.addEventListener('click', startGame);
newCardBtn.addEventListener('click', drawCard);
rulesBtn.addEventListener('click', showRules);

function startGame() {
    if (!isPlaying) {
        playerCards = [cardDeck[getRandomIndex()], cardDeck[getRandomIndex()]];
        isPlaying = true;
        for (let i = 0; i < playerCards.length; i++) {
            createCardElement(playerCards[i]);
        }
        getSum();
    } 
}


function getSum() {
    const breakpoint = /[a-z]/;
    let sum = 0;
    let arr = [];
    for (let i = 0; i < playerCards.length; i++) {
        arr = playerCards[i].split(breakpoint);
        sum += getCardValue(Number(arr[0]));
        console.log(getCardValue(arr[0]));
        console.log(sum)
    }
    console.log(sum)
}

function drawCard() {
    playerCards.push(cardDeck[getRandomIndex()]);
    createCardElement(playerCards[playerCards.length -1]);
    getSum();
}

function showRules() {
    if (!rulesVisible) {
        rulesSection.classList.remove('hidden');
        rulesVisible = true;
    } else {
        rulesSection.classList.add('hidden');
        rulesVisible = false;
    }
}

function getRandomIndex() {
    return Math.floor(Math.random() * cardDeck.length)
}

function createCardElement(img) {
    let card = document.createElement('img');
    card.classList.add('card-img');
    card.setAttribute('src', `./img/${img}`);
    card.setAttribute('alt', 'Image of playing card')
    cardsContainer.appendChild(card);
}

function getCardValue (num) {
    if (num === 1) {
        return 11;
    } if (num > 10) {
        return 10;
    } else {
        return num;
    }
}