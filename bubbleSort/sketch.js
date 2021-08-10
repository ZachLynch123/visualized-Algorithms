let values = [];


function setup() {
  createCanvas(400, 400);
  values = [width];
  // gets 400 random whole numbers 1 - height 
  for (let i = 1; i < width; i++) {
    values.push(Math.floor(Math.random() * (height - 1) + 1))
  }

  bubbleSort();

  // sorted yay.. values = sort(values)
}

function draw() {
  background(0);
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
        console.log("running");
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