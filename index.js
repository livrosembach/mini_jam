let characterX = 100; // Posição inicial do personagem
let characterY = 260;
let falling = false;
let skyfall = false;
let jumping = false;
let landing = false;
let canJump = true;
let showLeftImage = false
let showFallImage = false;

function preload() {
  warningImage = loadImage('scaredemoji.jpg',)
  fallimage = loadImage('gato.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(63, 193, 237);
}

function draw() {

image(warningImage, 200, 200);

if (characterX < 0) {
    characterX = windowWidth;
    showLeftImage = true;

} else if (characterX > windowWidth) {
    characterX = 0;
}

if (characterX >= 510 && characterX <= 1000) {
  falling = true;
  canJump = false;
}

if (falling) {
  if (characterY >= windowHeight) { //para de cair quando atinge o chão
    falling = false;
    skyfall = true;
    showFallImage = true;
    characterX = 100;
    characterY = -100;

  } else {
    characterY += 5
  }
}


if (jumping) {

  if (falling){
    jumping = false;
  }
  
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
    canJump = true;
  } else {
    characterY += 5
  }
}


  background(63, 193, 237);
  drawGrass();
  drawRoad();
  drawTree((3 * width) / 4, height / 2 - 100);
  drawCharacter(characterX, characterY); 
  drawNoLeftSign(80, 180);
  drawGoDownSign(750, 120); // Desenha o círculo azul com a seta para baixo


  if (showLeftImage) {
    image(warningImage, 1000, 20, 250, 250); // Desenha a imagem no centro da tela
    setTimeout(() => {
      showLeftImage = false; // Remove a imagem após 2,5 segundos
    }, 2500);
  }

  if (showFallImage) {
    image(fallimage, 420, 20, 250, 250); // Desenha a imagem no centro da tela
    setTimeout(() => {
      showFallImage = false; // Remove a imagem após 2,5 segundos
    }, 2500);
  }

  

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

function drawNoLeftSign(x, y) {
  // Desenha o círculo vermelho
  fill(255, 0, 0); // Vermelho
  noStroke();
  ellipse(x, y, 80, 80); // Círculo com 80px de diâmetro

  // Desenha a linha diagonal
  stroke(255); // Branco
  strokeWeight(5);
  line(x - 30, y - 30, x + 30, y + 30); // Linha diagonal

  // Adiciona o texto "←"
  noStroke();
  fill(255); // Branco
  textSize(32);
  textAlign(CENTER, CENTER);
  text("←", x, y); // Texto no centro do círculo
}

function drawGoDownSign(x, y) {
  // Desenha o círculo azul
  fill(0, 0, 255); // Azul
  noStroke();
  ellipse(x, y, 80, 80); // Círculo com 80px de diâmetro

  // Adiciona a seta para baixo
  fill(255); // Branco
  noStroke();
  triangle(x - 15, y - 10, x + 15, y - 10, x, y + 20); // Triângulo para a seta
  rect(x - 5, y - 20, 10, 10); // Retângulo para o "cabo" da seta
}