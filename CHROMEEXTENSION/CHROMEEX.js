
// chrome://extensions/
let myLeads = []
const inputEl  = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener(
    "click" , 
    function(){

    myLeads.push(inputEl.value)
    inputEl.value  = ""
    render()
        

    }
    
)

function render() {
    let listitems = ""
for(let i = 0 ; i < myLeads.length ; i++){
    listitems += `
        <li>
        
        <a target="_blank" href = 'https://www.google.com/search'>
          ${myLeads[i]}
        //   javascript code in dollar sign
        </a>
        </li>
    
    `
}


// dom manipulation has a cost
// so it;s better to render out one time rather than multiple times
ulEl.innerHTML = listitems
}

// let listitems = ""
// for(let i = 0 ; i < myLeads.length ; i++){
//     listitems += "<li>" + myLeads[i] + "</li>"
// }
// // dom manipulation has a cost
// // so it;s better to render out one time rather than multiple times
// ulEl.innerHTML = listitems