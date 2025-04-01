function setup() {
    createCanvas(windowWidth, windowHeight);
    background(63, 193, 237);
  }

  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255); // Fundo branco
}

function draw() {
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

 

    // Personagem maior
    fill(255, 182, 193); // Rosa
    noStroke();
    ellipse(width / 4, height / 2 - 40, 40, 40); // Cabeça maior
    rect(width / 4 - 10, height / 2 - 20, 20, 60); // Corpo maior
    line(width / 4 - 20, height / 2, width / 4 + 20, height / 2); // Braços maiores
    line(width / 4, height / 2 + 40, width / 4 - 20, height / 2 + 80); // Perna esquerda maior
    line(width / 4, height / 2 + 40, width / 4 + 20, height / 2 + 80); // Perna direita maior

    // // pedra
    // fill(0); // Preto
    // ellipse(width / 4 + 30, height / 2, 20, 20);

    // Árvore
    fill(139, 69, 19); // Marrom
    rect((3 * width) / 4, height / 2 - 100, 30, 100); // Tronco maior
    fill(34, 139, 34); // Verde
    ellipse((3 * width) / 4 + 15, height / 2 - 120, 100, 100); // Copa maior
    fill(255, 0, 0); // Vermelho
    ellipse((3 * width) / 4 + 30, height / 2 - 130, 7, 7); // Fruta maior
    ellipse((3 * width) / 4 - 15, height / 2 - 100, 7, 7); // Fruta maior
    ellipse((3 * width) / 4 + 10, height / 2 - 150, 7, 7); // Fruta maior
}