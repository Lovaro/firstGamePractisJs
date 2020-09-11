let canvas;
let contxto;
let FPS = 50; //fotograma por segundo

//variable global
let imgRex;

//bucle principal, se ejecuta una y otra vez
function inicializa() {
  canvas = document.getElementById("canvas");
  contxto = canvas.getContext("2d");

  //carga img
  imgRex = new Image(); //es un obj imagen
  imgRex.src = "img/wargreymon.png";

  setInterval(function () {
    principal();
  }, 1000 / FPS);
}

let protagonista = function (x, y) {
  this.x = x;
  this.y = y;
  this.velocidad = 3;

  this.dibuja = function () {
    contxto.drawImage(imgRex, this.x, this.y);
  };

  this.arriba = function () {
    this.y -= this.velocidad; //si es para arriba tiene q ser menor, eje y
  };

  this.abajo = function () {
    this.y += this.velocidad;
  };

  this.izq = function () {
    this.x -= this.velocidad; //dentro de x va hacia atras va -
  };

  this.der = function () {
    this.x += this.velocidad;
  };
};

let personaje = function (x, y) {
  this.x = x;
  this.y = y;
  this.derecha = true;

  this.dibuja = function () {
    contxto.fillStyle = "#FFF0000"; //le va decir el color de lo que estoy dibujando
    contxto.fillRect(this.x, this.y, 50, 50); // dibuja un rectangulo, pide 4 datos x y ancho y alto
  };

  this.mover = function (velocidad) {
    if (this.derecha == true) {
      if (this.x < 400) this.x += velocidad;
      else {
        this.derecha = false;
      }
    } else {
      if (this.x > 50) this.x -= velocidad;
      else {
        this.derecha = true;
      }
    }
  };
};

let pj1 = new personaje(10, 50);
let pj2 = new personaje(10, 120);
let pj3 = new personaje(10, 230);

let prota = new protagonista(200, 200);

document.addEventListener("keydown", function (tecla) {
  //arriba
  if (tecla.keyCode == 38) {
    prota.arriba();
  }

  //abajo
  if (tecla.keyCode == 40) {
    prota.abajo();
  }

  //izq
  if (tecla.keyCode == 37) {
    prota.izq();
  }

  //der
  if (tecla.keyCode == 39) {
    prota.der();
  }
});

//para que pueda haber moviento, se hace una funcion para limpiar canvas
function borrarCanvas() {
  canvas.width = 500;
  canvas.height = 400;
}

function principal() {
  // console.log("function");
  borrarCanvas();

  pj1.dibuja();
  pj2.dibuja();
  pj3.dibuja();

  //   pj1.mover(1);
  //   pj2.mover(3);
  //   pj3.mover(7);

  prota.dibuja();
}
