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
        let mousedown = true;
        const stopId = setInterval(()=>{
            // moves travelers to the right
            // unless mouseup or x > 850 px
            document.body.addEventListener('mouseup', () => {
                mousedown = false;
            });
            if (mousedown == false){
                clearInterval(stopId);
            }
            if (x > 850){
                clearInterval(stopId);
            }
            x = x + 5;   
            e.target.style.transform = `translateX(${x}px)`;   
        }, 10);
      
    })
})

