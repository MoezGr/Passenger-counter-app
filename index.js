let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count = count + 1
    countEl.textContent = count
    console.log(count)
}
function save() {
    let x = count + " - "
    saveEl.textContent = saveEl.textContent + x 
    countEl.textContent = 0
    count = 0 
     
}





// let welcomeEl = document.getElementById("welcome-el")

// let name = "Per Harald Borgen"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name + "👋 " + "hi"
 
//welcomeEl.innerText = welcomeEl.innerText + "👋"//




// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console


// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
// Render the welcome message using welcomeEl.innerText

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Moez GRAMI, "
// let greeting = "welcome back tou your course!"
// welcomeEl.innerText = name + greeting
// welcomeEl.innerText += "👋" // welcomeEl.innerText = welcomeEl.innerText + "👋"



