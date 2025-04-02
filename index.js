function setup() {
  createCanvas(windowWidth, windowHeight);
  background(63, 193, 237);
}

function draw() {
  background(63, 193, 237);
  
  // Grama
  fill(34, 139, 34); // Verde
  noStroke();
  rect(0, height / 2, width, height / 2);

  // Estrada
  fill(128, 128, 128); // Cinza
  beginShape();
  vertex(width / 3, height / 2);
  vertex((2 * width) / 3, height / 2);
  vertex((2 * width) / 3 - 50, height);
  vertex(width / 3 + 50, height);
  endShape(CLOSE);

  // Personagem melhorado
  drawCharacter(width / 4, height / 2 - 40);
  
  // Pedra
  fill(0); // Preto
  ellipse(width / 4, height / 2, 20, 20);
  
  // Árvore
  drawTree((3 * width) / 4, height / 2 - 100);
}

function drawCharacter(x, y) {
  // Cabeça ovalada
  fill(255, 182, 193); // Rosa
  noStroke();
  ellipse(x, y, 50, 60);
  
  // Olhos
  fill(0);
  ellipse(x - 12, y - 5, 6, 8);
  ellipse(x + 12, y - 5, 6, 8);
  
  // Boca
  fill(255, 0, 0);
  arc(x, y + 8, 18, 12, 0, PI);
  
  // Corpo arredondado com roupa vermelha
  fill(255, 0, 0); // Vermelho
  rect(x - 20, y + 30, 40, 60, 15);
  
  // Braços mais grossos e rosa
  fill(255, 182, 193);
  rect(x - 35, y + 40, 15, 40, 10);
  rect(x + 20, y + 40, 15, 40, 10);
  
  // Pernas mais grossas e rosa
  rect(x - 15, y + 90, 15, 40, 5);
  rect(x + 5, y + 90, 15, 40, 5);
}

function drawTree(x, y) {
  fill(139, 69, 19); // Marrom
  rect(x, y, 30, 100, 5);
  fill(34, 139, 34); // Verde
  ellipse(x + 15, y - 20, 100, 100);
  fill(255, 0, 0); // Vermelho
  ellipse(x + 30, y - 30, 7, 7);
  ellipse(x - 15, y, 7, 7);
  ellipse(x + 10, y - 50, 7, 7);
}
