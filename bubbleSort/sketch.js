let values = [];
let i = 0;
let j = 0;


function setup() {
  createCanvas(400, 400);
  values = [width];
  // gets 400 random whole numbers 1 - height 
  for (let i = 1; i < width; i++) {
    values.push(Math.floor(Math.random() * (height - 1) + 1))
  }
  // sorted yay.. values = sort(values)
}

function draw() {
  background(0);

  let a = values[j];
  let b = values[j + 1];
   if (a > b) {
      swap(values, j, j + 1)
    }
    
    j = j + 1;
    if (i < values.length) {
      if (j >= values.length-i-1) {
      j = 0;
      i = i + 1;
    }
    else {
      console.log("finished");
    }

    }
  for (let i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height - values[i]); // draws line with value at index i
  }
}

// 
const bubbleSort = () => {
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1)
      }
    }
  }
}


const swap = (values,a, b) => {
  let tempA = values[a];
  values[a] = values[b]
  values[b] = tempA;
}