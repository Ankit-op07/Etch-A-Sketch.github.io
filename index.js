//Function for random colors
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
let board = document.querySelector('.board');
let rainbow = document.querySelector('.rainbow');
let pixel_count =16;
let varColor = '#333333';


//Board Render functionality//
const renderBoard = (pixel_count) => {
    let pixel_width=480/pixel_count;
    let pixel_height=480/pixel_count;
    
    for(let i=0;i<pixel_count*pixel_count;i++){
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.height = `${pixel_height}px`;
    pixel.style.width =`${pixel_width}px`;
    
    //pixel.textContent='a';
    board.appendChild(pixel);
    }
 }

 renderBoard(16);
 let pixels = document.querySelectorAll('.pixel');

 //   ColorMode handle    //
let colorPicker = document.querySelector('#favcolor');
colorPicker.addEventListener("input",(e)=>{
varColor=e.target.value;
})


const rainbowMode =()=>{
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover',(e) => {
            pixel.style.backgroundColor =`${getRandomColor()}`;
            
        })
    })
}
const defaultMode =()=>{
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover',(e) => {
            pixel.style.backgroundColor =`${varColor}`;
            
        })
    })
}
   


defaultMode();//so that black color apply when we start the application

rainbow.addEventListener('click',(e)=>{// to change the colors to rainbow
 rainbowMode();
})
let defaultColor=document.querySelector('.color') // to change to default black color
defaultColor.addEventListener('click',(e)=>{
    defaultMode();
})

//   ColorMode handle    //





// Pixel Input functionality //

let slider = document.getElementById("sizeSlider");
let output = document.querySelectorAll('.show');
output[0].innerHTML = slider.value; // Display the default slider value
output[1].innerHTML = slider.value;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output[0].innerHTML = this.value;
  output[1].innerHTML = this.value;
 // clearMode();//when you change pixel screen clear
  board.innerHTML=``;
  pixel_count = this.value;
  renderBoard(pixel_count);
  pixels = document.querySelectorAll('.pixel');
  defaultMode(pixels);//so that black color apply when we start the application
}

//










//   Erase functionality //
let eraser = document.querySelector('.eraser');

const eraseMode =()=>{
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover',(e) => {
            pixel.style.backgroundColor =`white`;
            
        })
    })
}

eraser.addEventListener('click',(e) => {
    eraseMode();
})
//   Erase functionality //

// Clear Functionality //
const clearMode = ()=>{
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white';
    })
}

let clearAll = document.querySelector('.clear');
clearAll.addEventListener('click',()=>{
    clearMode();
})







