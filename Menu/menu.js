let letters = document.querySelector("#myAlphabet")

let numbers = document.querySelector("#myNumbers")

numbers.style.display = "none"

let letterclick = document.querySelector(".dropdown-item1")

letterclick.addEventListener('click', buttonclicked)

function buttonclicked(){
    letters.style.display = "block"
    numbers.style.display = "none"
}

let numberclick = document.querySelector(".dropdown-item")

numberclick.addEventListener('click', buttonclicked1)

function buttonclicked1(){
    numbers.style.display = "block"
    letters.style.display = "none"
}