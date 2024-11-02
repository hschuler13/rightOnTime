function changeFavicon() {
  changeFaviconhelper(newFaviconList[getRandomNumber])
}

newFaviconList = [
  "resources/favicon/ico/blue_favicon.ico",
  "resources/favicon/ico/green_favicon.ico",
  "resources/favicon/ico/pink_favicon.ico",
  "resources/favicon/ico/yellow_favicon.ico"
];


function changeFaviconhelper(newFavicon) {
  const link = document.getElementById("dynamic-favicon");
  if (link) {
    link.href = newFavicon;
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 4) + 1;
}

let A = 0;
let B = 0;
let C = 0;
let D = 0;
function calculateCountry(){
    
}

