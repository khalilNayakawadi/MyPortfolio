
let nameElement = document.querySelector('#myname');
let myDesignation = document.getElementById('mydes')
console.log(nameElement);
let currentIndex = 0;
let i = 0 ;
let myName = "Khalil Nayakawadi";  
let designation = "Software Developer";
console.log(myName);

const animatName = () => {
    if (currentIndex < myName.length) {
        if (myName[currentIndex] === ' ') {
            nameElement.innerHTML += '&nbsp;';
        } else {
            nameElement.innerText += myName[currentIndex];
        }
        currentIndex++;
    }
};

const animatDesignation = ()=>{
    if (i < designation.length) {
        if (designation[i] === ' ') {
            myDesignation.innerHTML += '&nbsp;';
        } else {
            myDesignation.innerText += designation[i];
        }
        i++;
    }
}

window.addEventListener('load', () => {
    setInterval(animatName, 200);
    setTimeout(() => {
        setInterval(animatDesignation,200) // after 4 sec this function will get executed
    }, 4000);
    
});






// let nameElement = document.querySelector('#myname');
// console.log(nameElement);
// let currentIndex = 0;
// let myName = "Khalil Nayakawadi";

// console.log(myName.toString());

// const animatName = () =>{
//    if(currentIndex < myName.length){
        
//         nameElement.innerText +=  myName[currentIndex]
//         currentIndex++;
//    }
  
// }



// window.addEventListener('load',()=>{
//     setInterval(animatName, 500)
// })