let firstCard = getrandom()
let secondCard = getrandom()
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl  = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


// objects
let player = {
     Name  : "Per",
     chips : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.chips

function getrandom(){
    
    let variac = Math.floor(Math.random() * 13) + 1

    if(variac === 1){
        return 11
    }

    else if(variac>=11 ){
        return 10
    }

    else{
        return variac
    }
}   

function start(){
    render()
}

function reset(){
    cardsEl.textContent = "Cards:"
    sumEl.textContent = "Sum:"
}

let cards = [firstCard , secondCard]

function render(){

    cardsEl.textContent = "Cards: " 

    for(let i = 0 ; i< cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
    isAlive = true

} 

else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
    isAlive =  false
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}

  messageEl.textContent = message
}


function newCard(){
    
    if(isAlive === true && hasBlackJack === false ){
        let card = getrandom()
        sum+=card
        cards.push(card)
        render()
    }
    
    else{
        messageEl.textContent = "GAME OVER"
    }

    // else{
    // let card = getrandom()
    // sum+=card
    // cards.push(card)
    // render()
    // // cardsEl.textContent += " " + card + " "
    // }
    
 
}