PImage imagen1, imagen2, imagen3;
int pantalla, tiempo, suma, diametro, py;
boolean ultimaPantalla;
color colorDelBoton;

void setup() {
  size(640, 480);
  imagen1 = loadImage ("noche.estrellada1.jpg");
  imagen2 = loadImage ("noche.estrellada2.jpg");
  imagen3 = loadImage ("noche.estrellada3.jpg");
  textSize(40);
  tiempo = frameCount/2;
  pantalla = 0;
  suma = 1;
  diametro = 50;
  ultimaPantalla = false;
  colorDelBoton = color(255 , 24 , 17);  
}

void draw() {
  if (pantalla == 0) {
 image (imagen1, 0, 0, width, height);
    push();
    fill (255, 255, 255, mouseY);
    textSize ( 85 );
    text("Noche Estrellada", 100, py, 440,300);
    pop();  
    if (py>-5);
  {
  py--;
  }
 
  } else if (pantalla == 1) {
    image ( imagen2, 0, 0, width, height);
    push();
    fill ( 255 , 255 , 255, mouseX );
    text("creada por \n Vincent van Gogh \n pintada en junio \n de 1889", 10,300);
    pop();
    if(py>-5);
    {
      py--;
    }
  } else if (pantalla == 2) {
   image(imagen3, 0, 0, width, height);
   fill (255,255,255, mouseY);
    text("representa la vista \n desde la ventana \n de su habitacion \n de asilo", 0,30); 
    push();
     if(py>-5);
     {
       py++;
     }
      fill(colorDelBoton);
      circle(583, 162, diametro);
      textSize(18);
      fill(0);
      text("Reiniciar", 560, 162);    
      pop();
    if (pantalla == 3) {
    image(imagen3, 0, 0, width, height);       
    }
  } 

  // tiempo += suma;
  if (ultimaPantalla == false) {
    tiempo = tiempo + suma;
  if (tiempo >= 250 && pantalla != 3) {
    tiempo = 0;
    if (pantalla != 2) {
      pantalla++;
    } else if (pantalla == 2) {
      ultimaPantalla = true;
    } 
   }
  }
}
  
void mouseClicked() {
  push ();
  pantalla++;
  if (ultimaPantalla == true) {
    if (dist( 583 , 162 , mouseX, mouseY) < diametro/2) {
      pantalla = 0;
      tiempo = 0;
      suma = 1;
      ultimaPantalla = false;
      pop ();
    }
  }
}
  //CONDICION PARA BOTÓN CIRCULAR
void mouseMoved() {
  if (ultimaPantalla == true) {
    if (dist(583 , 162 , mouseX, mouseY) < diametro/2) {
     
      colorDelBoton = color(225, 25, 19);
    }   else {
       push ();  
      colorDelBoton = color(25, 25, 19);
        textSize ( 18);
        fill ( 225 , 0 ,0 );
         text("Reiniciar", 560, 162); 
         pop ();
    }   
  }
}
