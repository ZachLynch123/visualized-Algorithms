let values = [];


function setup() {
  createCanvas(400, 400);
  values = [width];
  // gets 400 random whole numbers 
  for (let i = 1; i < values[0]; i++) {
    values.push(Math.floor(Math.random() * 10))
  }
}

function draw() {
  background(0);
  for (let i = 0; i < values.length; i++) {

  }
}
