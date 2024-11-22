let nav= document.querySelector('nav');
let menu= document.querySelector('#MENU');


let imenu= document.querySelector('#MENU');
var t=true;
menu.onclick = function() {
    if (t==true ) {
        nav.style.height= '329.23px';
      
        t=false;
    } else {
        
        nav.style.height= '73.19px';
        

        t=true;
    }

   
};

const mediaQuery = window.matchMedia('(min-width: 786px)');

if (mediaQuery.matches) {
    menu.style.display='none';
    nav.style.height= '73.19px !important';

    
}

let  valueDisplays  = document.querySelector("#counter") ; 
let interval = 5000;  

let start = 0 ;
let end =  parseInt(valueDisplays.getAttribute("data-val")) ; 
let duration = Math.floor(interval/end);

 let counter = setInterval(function(){
    start +=1 ;
    valueDisplays.textContent = start ; 
    if (start === end) {
        clearInterval(counter);  
    }
 },duration) ; 

 let state= false ; 
 document.getElementById('not-bag').addEventListener('click', function() {
    const notification = document.getElementById('notification');
    if(!state){
        notification.style.display = "block" ;
        state  = true;  
    }else{
        notification.style.display = "none" ; 
        state = false ;
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById("nav");
    const navLinks = document.querySelectorAll("#nav-link");
    const storeTitle = document.getElementById("store");
    const bagIcon = document.getElementById("not-bag");
    const menu = document.getElementById("MENU") ; 
    const currentPos = nav.offsetTop;

    window.onscroll = function() {
        const windowPos = document.documentElement.scrollTop;

        if (windowPos >= currentPos) {
            nav.classList.add("sticky");

            navLinks.forEach(link => {
                link.style.color = "black";
            });
            storeTitle.style.color = "#a23f25";
            bagIcon.style.color = "black";
            menu.style.color ="black" ; 
        } else {
            nav.classList.remove("sticky");

            navLinks.forEach(link => {
                link.style.color = ""; 
            });
            storeTitle.style.color = ""; 
            bagIcon.style.color = ""; 
            menu.style.color ="" ;
        }
    };
});


document.addEventListener('DOMContentLoaded', function() {
let  serves1=document.querySelector('.service1');
let  serves2=document.querySelector('.service2');
let  serves3=document.querySelector('.service3');
let  blog1=document.querySelector('.blog-item1');
let  blog2=document.querySelector('.blog-item2');
let  blog3=document.querySelector('.blog-item3');
let  blog4=document.querySelector('.blog-item4');
let  kinds=document.querySelectorAll('.kind');
let offers=document.querySelectorAll('.offer');



const positionser1 = serves1.offsetTop;
const positionser2 = serves2.offsetTop;
const positionser3 = serves3.offsetTop;
const blogsc1 = blog1.offsetTop;
const blogsc2 = blog2.offsetTop;
const blogsc3= blog3.offsetTop;
const blogsc4 = blog4.offsetTop;

let t=550;

window.onscroll = function() {
    const windowPos = document.documentElement.scrollTop;
    let t=550;
    if (windowPos >=positionser1-550) {
        serves1.style.animation="animatinall 1s  both";
     
        
    } 
    if (windowPos >=positionser2-500) {
 
        serves2.style.animation="animatinall 1s  both";
  
        
    } 
    if (windowPos >=positionser3-450) {
   
        serves3.style.animation="animatinall 1s  both";
        
    } 
    if (windowPos >=blogsc1-550) {
   
        blog1.style.animation="animatinall 1s  both";
        
    } 
    if (windowPos >=blogsc2-500) {
 
        blog2.style.animation="animatinall 1s  both";
  
        
    } 
    if (windowPos >=blogsc3-450) {
 
        blog3.style.animation="animatinall 1s  both";
  
        
    } 
    if (windowPos >=blogsc4-400) {
 
        blog4.style.animation="animatinall 1s  both";
  
        
    } 

    kinds.forEach(kind => {
        const kindsc = kind.offsetTop;
        if (windowPos >=kindsc-t) {
 
            kind.style.animation="animatinall 1s  both";
            
      t=t-20;
            
        } 

    });
    offers.forEach(offer => {
        const offersc = offer.offsetTop;
        if (windowPos >=offersc-t) {
 
            offer.style.animation="animatinall 1s  both";
            
      t=t-20;
            
        } 

    });
};
});








