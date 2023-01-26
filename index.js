// document.getElementById("count-el").innerText = 5;

// let count = 5 + 7

// console.log(count)

let count = 0
let Countel = document.getElementById("count-el")

function increment(){

   count = count + 1
   Countel.innerText = count;
   

}

// let counte = count + " - "
let saveEl = document.getElementById("save-el")
function save(){
    let counte = count + " - "
    saveEl.textContent+=counte
    Countel.textContent = 0
    count =  0

}