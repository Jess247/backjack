const cardsContainer =  document.querySelector('.cards-container');
const gameStateMsg = document.querySelector('.game-state-msg');
const playBtn = document.querySelector('.play-btn');
const newCardBtn = document.querySelector('.new-card-btn');
const rulesBtn = document.querySelector('.rules-btn');
const rulesSection = document.querySelector('.rules');
const cardDeck = [
    'C1s.png','C2.png','C3.png','C4.png','C5.png','C6.png','C7.png','C8.png','C9.png',
    'C10.png','C11.png','C12.png','C13.png',
    'h1.png','h2.png','h3.png','h4.png','h5.png','h6.png','h7.png','h8.png','h9.png',
    'h10.png','h11.png','h12.png','h13.png',
    'h1.png','h2.png','h3.png','h4.png','h5.png','h6.png','h7.png','h8.png','h9.png',
    'h10.png','h11.png','h12.png','h13.png',
    'p1.png','p2.png','p3.png','p4.png','p5.png','p6.png','p7.png','p8.png','p9.png',
    'p10.png','p11.png','p12.png','p13.png',
    't1.png','t2.png','t3.png','t4.png','t5.png','t6.png','t7.png','t8.png','t9.png',
    't10.png','t11.png','t12.png','t13.png'
];
let playerCards = [];
let sum = 0;
let isPlaying = false;
let hasBlackJack = false;
let message = "";


playBtn.addEventListener('click', startGame);
newCardBtn.addEventListener('click', drawCard);
rulesBtn.addEventListener('click', showRules);

function startGame() {
    playerCards = [cardDeck[getRandomIndex()], cardDeck[getRandomIndex()]];
    isPlaying = true;
    for (let i = 0; i < playerCards.length; i++) {
        createCardElement(playerCards[i]);
    }
}


function getCardsValue() {
    // loop through cars array and extract number value of card (max first two indexes)
    // if card array index 1 is a number concatenate index 0 and 1 and convert it to number 
    // if card value is greater than 10 set it equal to 10
    // if card value is 1 set it equal to 11
    // add the cards values to sum
    for (let i = 0; i < cardDeck.length; i++) {

    }
}

function drawCard() {
    playerCards.push(cardDeck[getRandomIndex()]);
    createCardElement(playerCards[playerCards.length -1]);
    
}

function showRules() {
    rulesSection.classList.remove('hidden');
    console.log('click')
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