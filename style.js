function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    
    stroke("red")
    fill("#105852");
    
   // console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
   rect(mouseX, mouseY, 20, 35);
    }
  }