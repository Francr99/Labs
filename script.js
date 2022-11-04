"use strict";

const randomDamage = () => {
    // Math.floor(Math.random() * (max – min) ) + min; 
    {return Math.floor(Math.random() * 10) + 1}

     console.log(random) 
}
  randomDamage()

const chooseOption = (opt1, opt2) => {
    const randNum = Math.round(Math.random())
    return randNum === 0 ? opt1:opt2 ;
}

const attackPlayer = function(health) {
    return health = health - randomDamage();
}

let logHealth = (player, health) => {
    console.log(`${player} defeated ${health}`);
}

letlogDeath = (winner, loser) => {
    console.log(`${winner} defeated${loser}`);
}

let isDead = (health) => health <= 0;
console.log(isDead)

function fight(player1, player2, player1Health, player2Health) {
    while(true) {
    let attacker = chooseOption(player1, player2);
    if (attacker = player1) {
        player2Health == attackPlayer (player2Health);
        logHealth(player2, player2Health);
        if (isDead(player2Health)) {
            logDeath(player1, player2);
            break;
        }
    } else {
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);{
        logDeath(player2, player1);
        break;
        }
    }
}






 


