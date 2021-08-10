let values = [];
let i = 0;
let j = 0;


function setup() {
  createCanvas(400, 400);
  values = [400];
  // gets 400 random whole numbers 1 - height 
  for (let i = 1; i < width; i++) {
    values.push((Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')); // creates 400 random hexidecimal colors
  }
  // sorted yay.. values = sort(values)
}

function draw() {
  background(0);
  // loop that runs bubble sort 60 times a second
  for (let k = 0; k < 100; k++) {
    bubbleSort();
  }

  for (let i = 0; i < values.length; i++) {
    stroke(`#${values[i]}`);
    line(i, height, i, height - values[i]); // draws line with value at index i
  }
}








const bubbleSort = () => {
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
}


const swap = (values,a, b) => {
  let tempA = values[a];
  values[a] = values[b]
  values[b] = tempA;
}