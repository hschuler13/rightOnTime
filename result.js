countriesList = ["Brazil!", "Canada!", "Egypt!", "Greece!", "Indonesia!", "Italy!", "Lebanon!", "Mexico!", "Nigeria!", "Vietnam!"]

countryImages = [
    "https://mapsvg.com/maps/brazil",
"https://mapsvg.com/maps/canada",
"https://mapsvg.com/maps/egypt",
"https://mapsvg.com/maps/greece",
"https://mapsvg.com/maps/indonesia",
"https://mapsvg.com/maps/italy",
"https://simplemaps.com/svg/country/lb",
"https://mapsvg.com/maps/mexico",
"https://mapsvg.com/maps/nigeria",
"https://mapsvg.com/maps/vietnam"
]

function randomNumber(max){
    return Math.floor(Math.random() * max) 
}

function countrySelect(){
    document.getElementsByTagName('p')[1].innerText = countriesList[randomNumber(10)];
}