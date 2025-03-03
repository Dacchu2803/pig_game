'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceE1 = document.querySelector('.dice'); 
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let totalDice,activePlayer,scores,playing;

const init = function(){
    totalDice = 0;
    activePlayer = 0;
    scores = [0,0];
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}

init();
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    totalDice = 0;
    activePlayer = activePlayer===0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};
score0El.textContent = 0;
score1El.textContent = 0;

diceE1.classList.add('hidden');


btnRoll.addEventListener('click',function(){
    if(playing){
    const diceRoll = Math.trunc(Math.random()*6)+1;
    diceE1.classList.remove('hidden');
    diceE1.src = `dice-${diceRoll}.png`;
    if(diceRoll !== 1){
        totalDice = totalDice + diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent = totalDice;
    }else{
        switchPlayer();

    }
}
});

btnHold.addEventListener('click',function(){
    if(playing){
    scores[activePlayer] +=totalDice;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >=20){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceE1.classList.add('hidden');
    }
    else{
    switchPlayer();
    }
}
});

btnNew.addEventListener('click',init);