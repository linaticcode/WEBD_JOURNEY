// chrome://extensions/
let myLeads = []
// // For converting the string into array
// myLeads = JSON.parse(myLeads)

// // For pushing a new value to array

// myLeads.push("www.lead2.com")

// // Turn the array into string again
// myLeads = JSON.stringify(myLeads)

const inputEl  = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

let deletebtn = document.getElementById("delete-btn")

const leadsfromlocal = JSON.parse(localStorage.getItem("myLeads"))

// good to practise const

if(leadsfromlocal){
 
    myLeads = leadsfromlocal
    render(myLeads)

}

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

tabBtn.addEventListener("click", function(){
    // Save the url instead of logging it out
    // console.log(tabs[0].url)
    
    chrome.tabs.query({active : true , currentWindow : true} , function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)   
    })

    // myLeads.push(tabs[0].url)
    // localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // render(myLeads)

})



deletebtn.addEventListener("dblclick", function(){

     localStorage.clear()
     myLeads.splice( 0 , myLeads.length)
     render(myLeads)

})


inputBtn.addEventListener(
    "click" , 
    function(){

    myLeads.push(inputEl.value)
    inputEl.value  = ""

    localStorage.setItem("myLeads" , JSON.stringify(myLeads))


    render(myLeads)
        

    }
    
)

function render(leads) {
    let listitems = ""
for(let i = 0 ; i < leads.length ; i++){
    listitems += `
        <li>
        
        <a target="_blank" href = 'https://www.google.com/search'>
          ${leads[i]}
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