function setup() {
    createCanvas(windowWidth, windowHeight);
    background(63, 193, 237);
  }

function draw() {
    // Grama
    // Green grass at the top part of the ground
    fill(34, 139, 34); // Green
    noStroke();
    // Left grass rectangle
    rect(0, height * 0.55, width / 3, height * 0.05); 
    // Right grass rectangle
    rect(2 * width / 3, height * 0.55, width / 3, height * 0.05);
    // Brown earth below the grass
    fill(139, 69, 19); // Brown
    noStroke();
    rect(0, height * 0.6, width, height * 0.4); // Earth

    // Estrada
    // Estrada - Gradient
    noStroke();
    let darkGray = color(80, 80, 80);  // Darker gray
    let lightGray = color(160, 160, 160);  // Lighter gray
    let steps = 50;  // Number of gradient steps
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
    beginShape();

 

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
    // Position the tree on top of the grass
    let grassTopY = height * 0.55;
    let treeX = (3 * width) / 4;
    let trunkHeight = 100;
    
    fill(139, 69, 19); // Marrom
    rect(treeX, grassTopY - trunkHeight, 30, trunkHeight); // Tronco maior
    
    fill(34, 139, 34); // Verde
    ellipse(treeX + 15, grassTopY - trunkHeight - 20, 100, 100); // Copa maior
    
    fill(255, 0, 0); // Vermelho
    ellipse(treeX + 30, grassTopY - trunkHeight - 30, 7, 7); // Fruta maior
    ellipse(treeX - 15, grassTopY - trunkHeight, 7, 7); // Fruta maior
    ellipse(treeX + 10, grassTopY - trunkHeight - 50, 7, 7); // Fruta maior
}