// grab all the blocks
const blockContainer = document.querySelector('.blocks');
const blocks = document.querySelectorAll('.block');
console.log(blocks);

//add event listener for click
blocks.forEach(block => {
    block.addEventListener('click', (e)=>{
        blockContainer.prepend(e.target); 
    });
});


blocks.forEach(block => {
    block.addEventListener('mousedown', (e)=> {
        console.log(e);
        blockContainer.prepend(e.target);
        let x = 0;
        const stopId = setInterval(()=>{
            if (x > 850){
                clearInterval(stopId);
            }
            x = x + 5;   
            e.target.style.transform = `translateX(${x}px)`;   
        }, 10);
      
    })
})

