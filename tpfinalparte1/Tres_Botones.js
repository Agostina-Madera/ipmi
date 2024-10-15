function dibujaBoton(txt_, x_, y_, ancho_, alto_) {
  push();
  rectMode(CENTER);
  fill(10, 200, 40);
  rect(x_, y_, ancho_, alto_);
  fill(255);
  
 textAlign(CENTER);
  textSize(14);
  textLeading(12);
  text(txt_, x_, y_);
  pop();
}

function colisionBoton(x_, y_, ancho_, alto_) {
  return (mouseX >x_ - ancho_ /2 && mouseX <x_ + ancho_ /2 &&
          mouseY >y_ - alto_ /2 && mouseY <y_ + alto_ /2);
}
