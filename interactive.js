////SCROLL ANIMATION
////scroll animation based on: https://www.youtube.com/watch?v=T33NN_pPeNI&ab_channel=BeyondFireship
//check each element to see if it is visible to the user
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //fade element in when it is visible to the user
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        //hide element once it can't be seen anymore
        else {
            entry.target.classList.remove('show')
        }
    })
})

//find all elements with hide class
const scrollDivs = document.querySelectorAll('.hide')
//run observer on all elements with hide class
scrollDivs.forEach((elmnt) => observer.observe(elmnt))

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

let B=0;
let C=0;
let E=0;
let G=0;
let IN=0;
let IT=0;
let L=0;
let M=0;
let N=0;
let V=0;
countriesList = [B,C,E,G,IN,IT,L,M,N,V];
function addValues(values){
  
}

function calculateCountry(){
  let valuesIndex = 0;
  for(let i=0;i<countriesList.length;i++){
    if(countriesList[i] == values[valuesIndex]){
      countriesList[i]++;
      valuesIndex++;
      if(valuesIndex == values.length){
        break;
      }
    }
  }
}



