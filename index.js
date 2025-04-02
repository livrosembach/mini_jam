function setup() {
  createCanvas(windowWidth, windowHeight);
  background(63, 193, 237);
}

function draw() {
  background(63, 193, 237);
  drawGrass();
  drawRoad();
  drawCharacter(width / 4, height / 2 - 40);
  drawTree((3 * width) / 4, height / 2 - 100);
}

function drawGrass() {
  fill(34, 139, 34);
  noStroke();
  rect(0, height * 0.55, width / 3, height * 0.05);
  rect(2 * width / 3, height * 0.55, width / 3, height * 0.05);
  fill(139, 69, 19);
  rect(0, height * 0.6, width, height * 0.4);
}

function drawRoad() {
  noStroke();
  let darkGray = color(80, 80, 80);
  let lightGray = color(160, 160, 160);
  let steps = 50;
  for (let i = 0; i < steps; i++) {
      let ratio = i / (steps - 1);
      let y = lerp(height * 0.6, height, ratio);
      let nextY = lerp(height * 0.6, height, (i + 1) / (steps - 1));
      
      let leftTop = lerp(width / 3, width / 3 + 50, ratio);
      let rightTop = lerp((2 * width) / 3, (2 * width) / 3 - 50, ratio);
      let leftBottom = lerp(width / 3, width / 3 + 50, (i + 1) / (steps - 1));
      let rightBottom = lerp((2 * width) / 3, (2 * width) / 3 - 50, (i + 1) / (steps - 1));
      
      fill(lerpColor(lightGray, darkGray, ratio));
      quad(leftTop, y, rightTop, y, rightBottom, nextY, leftBottom, nextY);
  }
}

function drawCharacter(x, y) {
  fill(255, 182, 193);
  noStroke();
  ellipse(x, y, 40, 40);
  rect(x - 10, y + 20, 20, 60);
  rect(x - 20, y + 40, 15, 40);
  rect(x + 5, y + 40, 15, 40);
  rect(x - 15, y + 80, 15, 40);
  rect(x + 5, y + 80, 15, 40);
}

function drawTree(x, y) {
  let grassTopY = height * 0.55;
  let trunkHeight = 100;
  fill(139, 69, 19);
  rect(x, grassTopY - trunkHeight, 30, trunkHeight);
  fill(34, 139, 34);
  ellipse(x + 15, grassTopY - trunkHeight - 20, 100, 100);
  fill(255, 0, 0);
  ellipse(x + 30, grassTopY - trunkHeight - 30, 7, 7);
  ellipse(x - 15, grassTopY - trunkHeight, 7, 7);
  ellipse(x + 10, grassTopY - trunkHeight - 50, 7, 7);
}
