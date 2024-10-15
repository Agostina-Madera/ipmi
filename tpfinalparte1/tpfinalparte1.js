let textos = [];
let imgs = [];
let opcionA = [];
let opcionB = [];
let pantallaActual = 1; //Variable global.
let pantallaAnterior = 1; //Variable de la pantalla anterior a la de créditos.

function setup() {
  createCanvas(640, 480);

  // Cargar los textos
  textos[2] = "Shrek es un ogro solitario, que vivía tranquilo en su pantano y odiaba a la gente.";
  
  textos[3] = "Burro escapa de ser arrestado por los guardias y le pide ayuda a Shrek para salvarse. Shrek podría...";
  
  opcionA[3] = "\nDarle asilo al\npobre burro desgraciado.";
  opcionB[3] = "\nNo ayudarlo y\nque Burro se las arregle solo.";
  
  opcionA[6] = "Rechazar";
  opcionB[6] = "Aceptar";
  
  opcionA[10] = "Ponerse las pilas.";
  
  opcionB[10] = "Ser cobarde y no ir.";
  
  

  textos[4] = "Probando, probando";
  
  //Carga de las imágenes, hay que cargar las que correspondan con la escena, estas las puse provisoriamente,
  //les agregué una letra (I e G) para que después no se nos mezclen tanto cuando empecemos a asignar
  //imágenes a las pantallas.
  imgs[2] = loadImage("data/PantallaI_02.png");
  imgs[3] = loadImage("data/PantallaG_01.png");
  imgs[4] = loadImage("data/DiagramaShrek.png");
}

function draw() {
  background(224);
  
  if (pantallaActual === 1) {
    //Pantalla de inicio, cá habría que poner una portada.
    dibujaBoton("Créditos", 532, 380, 68, 20);
    dibujaBoton("Iniciar", 100, 380, 68, 20);
    
    textAlign(CENTER, CENTER);
  } else if (pantallaActual > 1 && pantallaActual <= 6) {
    mostrarPantalla(pantallaActual);
  } else if (pantallaActual === 20) {
    mostrarCreditos();
    //Legajos.
  }
}
