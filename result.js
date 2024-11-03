countriesList = ["Brazil!", "Canada!", "Egypt!", "Greece!", "Indonesia!", "Italy!", "Lebanon!", "Mexico!", "Nigeria!", "Vietnam!"]
countryImages = ["brazil.svg",
    "canada.svg",
    "egypt.svg",
    "greece.svg",
    "indonesia.svg",
    "italy.svg",
    "lb.svg",
    "mexico.svg",
    "nigeria.svg",
    "vietnam.svg"]
    
function randomNumber(max){
    return Math.floor(Math.random() * max) 
}

function countrySelect(){
    let number = randomNumber(10)
    document.getElementsByTagName('p')[1].innerText = countriesList[number]
    document.getElementsByTagName('img')[0].src = countryImages[number]
}