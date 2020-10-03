// Your code goes here

// Grab DOM elements and assign to variables
// const page = document.getElementsByTagName('body')[0];
// console.log(page);
const navElements = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo-heading');
const mainNav = document.querySelector('.main-navigation');
const images = document.querySelectorAll('img');
const footer = document.querySelector('footer');
const header = document.querySelector('.home .intro');
const sectionBorder = document.querySelector('.home .inverse-content');
const sectionContent = document.querySelector('.home .content-pick');
const destChoice = document.querySelectorAll('.destination');
const destBtn = document.querySelectorAll('.btn');
const navLink = document.querySelector('.nav-link');
console.log(navLink);
navLink.href = "https://lambdaschool.com/";

// Add 10 Different Event Listeners for MVP

// 1. load event --> Welcome user to site
window.addEventListener('load', () => alert("Welcome to FunBus Travel!"));

// 2. beforeunload event --> User alert to confirm they want to leave the page
window.addEventListener('beforeunload', (e) => {
    console.log(e.type);
    e.preventDefault();
    e.returnValue = '';
});

// 3. scroll event --> fill in color of header
window.addEventListener('scroll', ()=> {
    console.log(window.scrollY);
    mainNav.style.backgroundColor = "#ffebcd";   
});

// 4. mouseover and 
// 5. mouseleave on nav links
navElements.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        e.target.style.color = "#14a2b8";
        e.target.style.fontWeight = 'bold';
    });
    link.addEventListener('mouseleave', (e) => {
        e.target.style.color = 'black';
        e.target.style.fontWeight = 'normal';
    });
});

// 6. dblclick and 
// 7. click on navContainer
mainNav.addEventListener('dblclick', ()=> {
    logo.style.color = '#fdba4c';
    logo.style.fontSize = '5rem';
    // tried out greensock animations 
    gsap.to(logo, {duration: 2, x: 200, ease: "bounce"});
});
mainNav.addEventListener('click', () => {
    logo.style.color = 'black';
    logo.style.fontSize = '4rem';
     // tried out greensock animations 
    gsap.to(logo, {duration: 2, x: 0, ease: "bounce"});
});

// 8. keydown event --> add border to images when key pressed is f
document.addEventListener('keydown', (e)=>{
    if (e.code == 'KeyF'){
        images.forEach(image => {
            image.style.border = "5px solid #fdba4c";
        }); 
    }
});
// 9. keyup event --> remove border when key up is f
document.addEventListener('keyup', (e)=>{
    if (e.code == 'KeyF'){
        images.forEach(image => {
            image.style.border = "none";
        }); 
    }
});
// 10. mousedown event on images rotates img clockwise 360deg
images.forEach(image => {
    image.addEventListener('mousedown', (e)=>{
        // Used gsap animation for rotation and reset
        gsap.to(e.target, { duration: 1, rotate: 360});
        TweenLite.set(e.target, {clearProps:"transform"});
        mainNav.style.zIndex = '99';
    })
})

// 11. keypress on document, changes border color
document.addEventListener('keypress', (e)=> {
    console.log(e.code);
    if(e.code == 'KeyB'){
       mainNav.style.borderColor = "#14a2b8";
       mainNav.style.borderWidth = '4px';
       footer.style.borderColor = '#14a2b8';
       footer.style.borderWidth = '4px';
       header.style.borderBottom = 'dashed 4px #14a2b8';
       sectionBorder.style.borderBottom = 'dashed 4px #14a2b8';
       sectionContent.style.borderTop = 'dashed 4px #14a2b8';
    }
})
// Demonstrate .stopPropagation()
destChoice.forEach(section => {
    section.addEventListener('click', (e) => {
        e.target.style.color = '#14a2b8';
        console.log("destination clicked")
    })
})
destBtn.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        e.target.style.backgroundColor = '#fdba4c';
        e.stopPropagation();
        console.log('button clicked');
    })
})
// Demonstrate .preventDefault()
navElements.forEach(link => {
    link.addEventListener('click', (e) => {
    e.preventDefault();
    });
});
navLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Not hyperlinking to Lambda School');
})

