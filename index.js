let characterX = 100; // Posição inicial do personagem
let characterY = 260;
let falling = false;
let skyfall = false;
let jumping = false;
let landing = false;
let canJump = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(63, 193, 237);
}

function draw() {

if (characterX < 0) {
    characterX = windowWidth;

} else if (characterX > windowWidth) {
    characterX = 0;
}

if (characterX >= 440 && characterX <= 830) {
  falling = true;
}

if (falling) {
  if (characterY >= windowHeight) { //para de cair quando atinge o chão
    falling = false;
    skyfall = true;
    characterX = 100;
    characterY = -100;

  } else {
    characterY += 5
  }
}

if (jumping) {
  
  if (characterY == 200){
      jumping = false
      landing = true
  }
  else if (characterY != 200) {
    characterY -= 5
  }
}

if (landing) {
  if (characterY == 260) {
    landing = false;
  }
  else if (characterY != 260) {
    characterY += 5
  }
}

if (skyfall) {
  

  if (characterY == 260) {
    skyfall = false;
  } else {
    characterY += 5
  }
}


  background(63, 193, 237);
  drawGrass();
  drawRoad();
  drawTree((3 * width) / 4, height / 2 - 100);
  drawCharacter(characterX, characterY); 
  

  // Movimento contínuo ao segurar as teclas
  if (keyIsDown(LEFT_ARROW)) {
    characterX -= 5; // Move para a esquerda
  }
  if (keyIsDown(RIGHT_ARROW)) {
    characterX += 5; // Move para a direita
  }
  if (keyIsDown(UP_ARROW) && canJump) {
    jumping = true;
    canJump = false; // Bloqueia o pulo
    setTimeout(() => {
      canJump = true; 
    }, 600);
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

  // Parte cinza do buraco (reta)
  fill(darkGray);
  rect(width / 3, height * 0.6, width / 3, height * 0.4);

  
}

function drawCharacter(characterX, y) {
  // Cabeça ovalada
  fill(255, 182, 193); // Rosa
  noStroke();
  ellipse(characterX, y, 50, 60);

  // Olhos
  fill(0);
  ellipse(characterX - 12, y - 5, 6, 8);
  ellipse(characterX + 12, y - 5, 6, 8);

  // Boca
  fill(255, 0, 0);
  arc(characterX, y + 8, 18, 12, 0, PI);

  // Corpo arredondado com roupa vermelha
  fill(255, 0, 0); // Vermelho
  rect(characterX - 20, y + 30, 40, 60, 15);

  // Braços mais grossos e rosa
  fill(255, 182, 193);
  rect(characterX - 35, y + 40, 15, 40, 10);
  rect(characterX + 20, y + 40, 15, 40, 10);

  // Pernas mais grossas e rosa
  rect(characterX - 15, y + 90, 15, 40, 5);
  rect(characterX + 5, y + 90, 15, 40, 5);
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

}
