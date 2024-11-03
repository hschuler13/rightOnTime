countriesList = ["Brazil!", "Canada!", "Egypt!", "Greece!", "Indonesia!", "Italy!", "Lebanon!", "Mexico!", "Nigeria!", "Vietnam!"]

function randomNumber(max){
    return Math.floor(Math.random() * max) 
}

function countrySelect(){
    document.getElementsByTagName('p')[1].innerText = countriesList[randomNumber(10)];
}