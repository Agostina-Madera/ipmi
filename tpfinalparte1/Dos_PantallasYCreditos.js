function mostrarPantalla(numPantalla_) {
  push();
  //Fondo.
  image(imgs[numPantalla_], 0, 0, width, height);

  //Texto de arriba.
  fill(0, 100);
  noStroke();
  rect(0, height * 0.6, width, height * 0.3);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  text(textos[numPantalla_], 0, height * 0.6, width, height * 0.3);
  pop();

  //Botón de "Siguiente".
  if (pantallaActual === 2) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }

  //Opciones A y B de la pantalla 3.
  if (pantallaActual === 3) {
    dibujaBoton(opcionA[3], 120, 440, 200, 40);
    dibujaBoton(opcionB[3], 480, 440, 200, 40);
   
  }
  
  if (pantallaActual === 4) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  
  }
  if (pantallaActual === 5) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }
  
  
  if (pantallaActual === 6) {
    dibujaBoton(opcionA[6], 120, 440, 200, 40);
    dibujaBoton(opcionB[6], 480, 440, 200, 40);
  }
  
  if (pantallaActual === 7) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }
  
  if (pantallaActual === 8) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }
  
   if (pantallaActual === 9) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }
  
  if (pantallaActual === 10) {
    dibujaBoton(opcionA[10], 120, 440, 200, 40);
    dibujaBoton(opcionB[10], 480, 440, 200, 40);
  }
  
  if (pantallaActual === 11) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }
  
  if (pantallaActual === 12) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }
  
   if (pantallaActual === 13) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }
  


function mostrarCreditos() {
  background(100, 134, 108);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Créditos", width/2, height/4);
  textSize(20);
  text("Acá van los legajos.", width/2, height/2);

  //Botón para volver a la pantalla anterior.
  dibujaBoton("Volver", width/2, height * 0.8, 100, 40);
}

function mousePressed() {
  if (pantallaActual === 1) {
    if (colisionBoton(532, 380, 68, 20)) {
      //Si se presiona en "Créditos".
      pantallaAnterior = pantallaActual; //Guardar la pantalla actual
     
      pantallaActual = 20; //Va a la pantalla de créditos con nuestros nombres y legajos.
      
    } else if (colisionBoton(100, 380, 100, 40)) {
      
      //Si se hace click "Iniciar".
      pantallaActual = 2; //Va a la primera pantalla del juego.
    
  }
  }
    } else if (pantallaActual === 2) {
    
    if (colisionBoton(532, 420, 68, 20)) {
      pantallaActual++;
    
  } else if (pantallaActual === 3) {
    
    if (colisionBoton(120, 440, 200, 40)) {
      pantallaActual++;
      
    } else if (colisionBoton(480, 440, 200, 40)) {
      pantallaActual--;
    }
    
  } else if (pantallaActual === 20) {
    
    if (colisionBoton(width /2, height * 0.8, 100, 40)) {
      pantallaActual = pantallaAnterior;
     
      
       } else if (pantallaActual === 4) {
      
      if (colisionBoton(532, 420, 68, 20))
      pantallaActual++;
      
    } else if (pantallaActual === 5) {
      
      if (colisionBoton(532, 420, 68, 20))
      pantallaActual++;
      
    } else if (pantallaActual === 6) {
      if (colisionBoton(120, 440, 200, 40)){
        pantallaActual === 16;
        
      } else if (colisionBoton(480, 440, 200, 40))
      pantallaActual++;
      
    } else if (pantallaActual === 7) {
      
      if (colisionBoton(532, 420, 68, 20))
      pantallaActual++;
      
    } else if (pantallaActual === 8) {
      
      if (colisionBoton(532, 420, 68, 20))
      pantallaActual++;
      
    } else if (pantallaActual === 9) {
      
      if (colisionBoton(532, 420, 68, 20))
      pantallaActual++;
      
    } else if (pantallaActual === 10) {
      
      if (colisionBoton()) 
      pantallaActual++;
        
       else if (colisionBoton())
       pantallaActual--;
       
    } else if (pantallaActual === 11) {
      
      if (colisionBoton(532, 420, 68, 20))
      pantallaActual++;
      
    } else if (pantallaActual === 12) {
      
      if (colisionBoton(532, 420, 68, 20))
      pantallaActual++;
      
    } else if (pantallaActual === 13) {
      
      if (colisionBoton(532, 420, 68, 20))
      pantallaActual++;
      
    } else if (pantallaActual === 14) {
      
      if (colisionBoton())
      pantallaActual++;

    }
  }
}
