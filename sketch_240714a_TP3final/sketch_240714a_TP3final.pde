//comision 3 tp3
//Agostina Madea
//legajo  119073/1
//https://youtu.be/aR2hiMPhKZ0?si=QEAD4Whk5uLQbAGb
PImage imagen;
boolean zoomEnProgreso = false;
float factorEscala = 1.0;
float velocidadZoom = 0.005; // reducir la velocidad del zoom para hacerlo más lento
boolean zoomAdentro = true; // indica si está haciendo zoom in
float escalaMaxima = 2.5; // escala máxima para el efecto de túnel
float escalaMinima = 1.0; // escala mínima para el efecto de túnel

void setup() {
  size(800, 400); // establece el tamaño de la ventana
  imagen = loadImage("imagen2.jpg.jpg"); // carga la imagen proporcionada
}

void draw() {
  background(255); // color de fondo 
  image(imagen, 0, 0, 400, 400); // dibuja la imagen en la mitad izquierda
  // dibuja el cuadrado de fondo
  dibujarCuadrado(600, 200, 400, 400);
  //coordenadas de imagen

  // dibuja el efecto de túnel en movimiento
  dibujarEfectoTunel(600, 200, 400, 400);
}

void dibujarCuadrado(float x, float y, float ancho, float alto) {
  pushMatrix();
  translate(x, y); // mueve el origen al centro de la mitad derecha
  int pasos = 20; // número de pasos para hacer el marco más detallado
  for (int i = 0; i < pasos; i++) { // bucle de repeticiones
    float tamaño = map(i, 0, pasos, ancho, 0); // calcula el tamaño de cada rectángulo
    float alpha = map(i, 0, pasos, 255, 0); // calcula la transparencia de cada rectángulo
    if (i % 2 == 0) {
      fill(0, alpha); // alterna entre negro
    } else {
      fill(255, alpha); // y blanco
    }

    rectMode(CENTER);
    rect(0, 0, tamaño, tamaño); // dibuja el rectángulo
  }

  popMatrix();
}

void dibujarEfectoTunel(float x, float y, float ancho, float alto) {
  pushMatrix();
  translate(x, y); // mueve el origen al centro de la mitad derecha
  scale(factorEscala); // aplica la escala de zoom

  int pasos = 50; // número de pasos para hacer el túnel más detallado
  for (int i = 0; i < pasos; i++) {
    float tamaño = map(i, 0, pasos, ancho, 0) * 0.9; // calcula el tamaño de cada rectángulo
    float alpha = map(i, 0, pasos, 255, 0); // calcula la transparencia de cada rectángulo
    if (mouseX > 400 && mouseX < 800 && mouseY > 0 && mouseY < 400) {
      fill(random(255), random(255), random(255), alpha); // cambia a colores aleatorios si el mouse está en la mitad derecha
    } else {
      if (i % 2 == 0) {
        fill(0, alpha); // negro si el mouse no está en la mitad derecha
      } else {
        fill(255, alpha); // blanco para los otros rectángulos
      }
    }

    rectMode(CENTER);
    if (tamaño * factorEscala <= ancho) { // asegura que los rectángulos no excedan los límites
      rect(0, 0, tamaño, tamaño); // dibuja el rectángulo
    }
  }

  popMatrix();
  
  if (zoomEnProgreso) { // si el zoom está en progreso
    if (zoomAdentro) { // si estamos haciendo zoom in
      factorEscala += velocidadZoom; // incrementa el factor de escala
      if (factorEscala >= escalaMaxima) { // límite de zoom in
        zoomAdentro = false; // cambia a zoom out
      }
    } else { // si estamos haciendo zoom out
      factorEscala -= velocidadZoom; // decrementa el factor de escala
      if (factorEscala <= escalaMinima) { // límite de zoom out
        zoomAdentro = true; // cambia a zoom in
      }
    }
  }
}

void mousePressed() {
  if (!zoomEnProgreso) { // si el zoom no está en progreso
    zoomEnProgreso = true; // inicia el zoom
    loop(); // inicia el bucle draw
  }
}

void keyPressed() {
  if (key == ' ') { // si se presiona la barra espaciadora
    resetearVariables(); // resetea las variables
    redraw();
    noLoop(); // detiene el bucle draw
  }
}

void resetearVariables() {
  factorEscala = 1.0; // reinicia el factor de escala
  zoomAdentro = true; // reinicia el estado de zoom
  zoomEnProgreso = false; // detiene el zoom
}
