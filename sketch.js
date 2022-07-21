// guarda as particulas que dão origem as linhas que são desenhadas
let particula = [];
// numero de particulas na tela
const num = 1000; 
//regula a intensidade do ruido
let mag = 0.01;

function setup() {
  //createCanvas(500, 500);
  createCanvas(windowWidth, windowHeight);
  // cria vetores que são armazenados no array de particulas
  for (let i = 0; i < num; i++){
    // escolhe pontos em lugares aleatóriods da tela
    particula.push(createVector(random(width), random(height)));
  }
  //background(51);
  background(0, 0, 50, 255);
  //colorMode(HSB);
}

function draw() {
  stroke(180, 0, 65, 100 ); // particulas são brancas
  //strokeWeight()
  //desenha as particulas na tela
  for (let i = 0; i < num; i++){
    let p = particula[i];
    point(p.x, p.y);
    // ruido criado pela função "noise" cria um valor entre 0 e 1
    //cada valor do ruido é associado a um angulo
    let ruido = noise(p.x * mag, p.y * mag);
    //let ruido = random(p.x , p.y );
    let angulo = TWO_PI * ruido;
    p.x = p.x + cos(angulo);
    p.y = p.y + sin(angulo);

    if(!naTela(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}

//function mouseReleased() {
//  noiseSeed(millis());
//}

function naTela(vetor) {
  return vetor.x >= 0 && vetor.x <= width && vetor.y >= 0 && vetor.y <= height;
}