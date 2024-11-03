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


submitBtn = document.getElementById('submitButton')
submitBtn.onclick = function(){
    for(let i = 0; i < document.getElementsByTagName('input')-1; i++){
        let rBtn = document.getElementsByTagName('input')[i]
        if(rBtn.checked){
            console.log(rBtn.value)
        }
        else{
            console.log("null")
        }
    }
}

countriesList = ["Brazil!", "Canada!", "Egypt!", "Greece!", "Indonesia!", "Italy!", "Lebanon!", "Mexico!", "Nigeria!", "Vietnam!"]

function randomNumber(max){
    return Math.floor(Math.random() * max) 
}

function countrySelect(){
    document.getElementsByTagName('p')[1].innerText = countriesList[randomNumber(10)];
}