const colors = ['red', 'blue', 'green', 'purple', 'orange','pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));//Shuffle is a function which uses Fisher-ates Algorithm
let selectedCards = []; //Temporary storage for selected cards during gameplay
let score = 0; 
let timeLeft = 30;
let gameInterval; //Manages Time countdown mechanism

//DOM Elementselection 
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container'); //Dynamic generation of cards
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards(){
    for (const color of cards){
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = "?";
        gameContainer.appendChild(card);
    }
}

function shuffle(array){
    for(let i= array.length - 1; i>0; i--){
        const j = Math.floor(Math.random()* (i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
    return array
}

function handleCardClick(event){
    const card = event.target; //index of the card
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return; //If the card is already matched or clicked is card or not
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if(selectedCards.length === 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    const [card1, card2] = selectedCards;
    if(card1.dataset.color === card2.dataset.color){
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score : ${score}`;
    }else{
        card1.textContent = "?";
        card2.textContent = "?";
        card1.style.backgroundColor = "#ddd";
        card2.style.backgroundColor = "#ddd";
    }
    selectedCards=[];// Resetting the selected cards
}

function startGame(){
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; //Reset Score to 0
    scoreElement.textContent= `Score : ${score}`;
    startGameTimer(timeLeft);
    card=shuffle(colors.concat(colors));
    selectedCards =[];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click',handleCardClick);
    

}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
            gameContainer.innerHTML='';
        }
    }, 1000);
}

startbtn.addEventListener('click',startGame)