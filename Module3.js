//Baseline HTML to enter javascript and CSS

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>People entered:</h1>
        <h2 id="count-el">0</h2>
        <button id="increment-btn" onclick="increment()">INCREMENT</button>
        <script src="index.js"></script>
    </body>
</html>
///////////////////////

//Grab element "ID" and create object (DOM) to be used in Javascript

let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
  count = count + 1;
  countEl.innertext = count //Change countEl
  //also countEl.textContent or countEl.innerHTML
}

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}

// Object
let player = {
    name: "Per",
    chips: 200,
    sayHello: function() {
        console.log("Heisann!")
    }
}

player.sayHello() {

}

// Object

let box = document.getElementById("box")

box.addEventListener("click", function(){
    console.log("I want to open the box!")
}

// InnerHTML

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}

// Minimise instances of interacting with the DOM

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
// 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    listItems += "<li>" + myLeads[i] + "</li>"
}

// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems

// Template Strings

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
     // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

//JSON file for Chrome extension

{
    "manifest_version": 3,
    "version": "1.1",
    "name": "Leads tracker",
    "action": {
        "default_popup": "index.html",
        "default_icon": "icon.png"
    }
}

//Local Storage

let name = localStorage.getItem("myName")
localStorage.clear()

//Store arrays in local Storage

let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myL)

localStorage.setItem("myLeads", JSON.stringify(myLeads) )

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

//Falsy values

false
0
""
null -> how you as a developer signalize emptiness
undefined -> how JavaScript signalizes emptiness
NaN

//Getting current tab

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        let activeTab = tabs[0]
        let activeTabId = activeTab.id // or do whatever you need
    })

    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)

})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
}
