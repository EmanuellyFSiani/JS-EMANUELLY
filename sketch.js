function setup() {
  createCanvas(600, 600);//cria um retângulo de x de largura por y de altura
  background("blue");//muda cor do fundo
}

function draw() {
  stroke("purple")
  fill("pink");

  if(mouseIsPressed)
  rect(mouseX,mouseY,80,80);//cria um retângulo

}
