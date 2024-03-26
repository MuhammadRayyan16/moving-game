const h1 = document.querySelector(".h7");
const ctn = document.querySelector(".container"); 
setInterval(function () {
    if (h1.innerHTML == "Left") {      
        ctn.style.alignItems = "flex-start";
        ctn.style.justifyContent = "center"
        h1.innerHTML = "Top";
        ctn.style.backgroundColor = "black";
    
} 
 else if (h1.innerHTML == "Top") {  
    ctn.style.alignItems = "center";
    ctn.style.justifyContent = "flex-end";
    h1.innerHTML = "Right";
    ctn.style.backgroundColor = "blue";
 }

   else if (h1.innerHTML == "Right") {     
        ctn.style.alignItems = "flex-end";
        ctn.style.justifyContent = "center";
        h1.innerHTML = "Bottom";
        ctn.style.backgroundColor = "pink";
        
   }   
else {
    h1.innerHTML = "Left";
    ctn.style.alignItems = "center";
    ctn.style.justifyContent = "flex-start";
    ctn.style.backgroundColor = "green";
 } 
}, 1000);