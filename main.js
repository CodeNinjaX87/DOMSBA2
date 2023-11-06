import "styles.css";

//Part one
const mainEl1= document.querySelector("body");
const h1Element= document.createElement("h1El");
h1Element.textContent= "No Mario"
const newNav= document.getElementsByClassName("nav-item")
const newBrand= document.getElementsByClassName("navbar-brand").style.color= "#e71f18";

newBrand.style.color

const mainEl= document.getElementById("main")
//newNav.appendChild(h1Element)
//Not working for some reason-mainEl1.style.backgroundColor= "black";
//^^h1Element.style.color= "green";

//Event listener
const Btn= document.getElementById("button").type;
Btn.addEventListener("click", addAlert)
Btn.addEventListener("mouseover", greet)
function addAlert(){
const newAlert= Btn.click;
alert("Hey, Wait!"); 
}

function greet (){
    console.log("Hey Welcome")
}

//Loop- Working on it
 const buttonLoop= document.querySelectorAll("button");
 i= buttonLoop
 newArray.forEach
(i=0, i= i<10, i++)
 console.log("lets gooo")
