valor_anterior = 0;
valor = 0;
operacion_actual = 0;
primera_vez = true;

var signos = ["+", "-", "*", "/", "%", "^", " yroot ", "logbase", "mod", "e"];
var botones_ocultos = false;

function rescatar() {
  valor = +$("#pantalla").text();
}

function imprimir(num) {
  if (primera_vez) {
    $("#historial").html("");
    primera_vez = false;
  }
  $("#pantalla").html(num);
}

function add(numero) {
  if ($("#pantalla").text() != 0) {
    $("#pantalla").html($("#pantalla").text() + numero);
  } else $("#pantalla").html(numero);
}

function pi() {
  $("#pantalla").html(Math.PI);
}

function euler() {
  $("#pantalla").html(Math.E);
}

function borrar_ultimo() {
  $("#pantalla").html(
    $("#pantalla")
      .text()
      .substring(0, $("#pantalla").text().length - 1)
  );
}

function cuadrado_cubo() {
  if (!botones_ocultos) {
    rescatar();
    let v1 = valor;
    valor = valor * valor;
    imprimir(valor);
    operacion_actual = 1;
    imprimir_operacion(v1 + ")", "squr(", "", valor);
  } else {
    rescatar();
    let v1 = valor;
    valor = valor * valor * valor;
    imprimir(valor);
    operacion_actual = 1;
    imprimir_operacion(v1 + ")", "cube(", "", valor);
  }
}

function raiz_cucu() {
  if (!botones_ocultos) {
    rescatar();
    let v1 = valor;
    valor = Math.sqrt(valor);
    imprimir(valor);
    operacion_actual = 1;
    imprimir_operacion("", v1, " √ ", valor);
  } else {
    rescatar();
    let v1 = valor;
    valor = Math.sqrt(valor);
    imprimir(valor);
    operacion_actual = 1;
    imprimir_operacion(v1 + ")", "", "cuberoot(", valor);
  }
}

function expo_raizde() {
  if (!botones_ocultos) {
    rescatar();
    valor_anterior = valor;
    valor = 0;
    operacion_actual = 6;
    imprimir(0);
  } else {
    rescatar();
    valor_anterior = valor;
    valor = 0;
    operacion_actual = 7;
    imprimir(0);
  }
}

function elevar10_elevar2() {
  if (!botones_ocultos) {
    rescatar();
    let v1 = valor;
    valor = Math.pow(10, valor);
    imprimir(valor);
    operacion_actual = 1;
    imprimir_operacion("", " 10^ ", v1, valor);
  } else {
    rescatar();
    let v1 = valor;
    valor = Math.pow(2, valor);
    imprimir(valor);
    operacion_actual = 1;
    imprimir_operacion("", " 2^ ", v1, valor);
  }
}

function log_logbase() {
  if (!botones_ocultos) {
    rescatar();
    let v1 = valor;
    valor = Math.log(valor);
    imprimir(valor);
    operacion_actual = 1;
    imprimir_operacion("", " log ", v1, valor);
  } else {
    rescatar();
    valor_anterior = valor;
    valor = 0;
    operacion_actual = 8;
    imprimir(0);
  }
}

function lognat_euler() {
  if (!botones_ocultos) {
    rescatar();
    let v1 = valor;
    valor = Math.log(valor);
    imprimir(valor);
    operacion_actual = 1;
    imprimir_operacion("", " Ln ", v1, valor);
  } else {
    rescatar();
    let v1 = valor;
    valor = Math.pow(Math.E, valor);
    imprimir(valor);
    operacion_actual = 1;
    imprimir_operacion("", " e^ ", v1, valor);
  }
}

function fluctua() {
  if (!botones_ocultos) {
    botones_ocultos = true;
    $("#fluctua").addClass("secundario");
    $("#x-cuadrado").html("X<sup>3</sup>");
    $("#2-raiz-x").html("<sup>3</sup>&#8730<sub>x</sub>");
    $("#x-elevado-y").html("<sup>y</sup>&#8730<sub>x</sub>");
    $("#diez-elevado-x").html("2<sup>x</sup>");
    $("#log").html("<msup>log yx </msup>");
    $("#neperiano").html("e<sup>x</sup>");
  } else {
    botones_ocultos = false;
    $("#fluctua").removeClass("secundario");
    $("#x-cuadrado").html("X<sup>2</sup>");
    $("#2-raiz-x").html("<sup>2</sup>&#8730<sub>x</sub>");
    $("#x-elevado-y").html("x<sup>y</sup>");
    $("#diez-elevado-x").html("10<sup>x</sup>");
    $("#log").html("log");
    $("#neperiano").html("ln");
  }
}

function expo() {
  rescatar();
  valor_anterior = valor;
  valor = 0;
  operacion_actual = 10;
  imprimir(0);
}

function suma() {
  rescatar();
  valor_anterior = valor;
  valor = 0;
  operacion_actual = 1;
  imprimir(0);
}

function mod() {
  rescatar();
  valor_anterior = valor;
  valor = 0;
  operacion_actual = 9;
  imprimir(0);
}

function resta() {
  rescatar();
  valor_anterior = valor;
  valor = 0;
  operacion_actual = 2;
  imprimir(0);
}

function multiplicar() {
  rescatar();
  valor_anterior = valor;
  valor = 0;
  operacion_actual = 3;
  imprimir(0);
}

function division() {
  rescatar();
  valor_anterior = valor;
  valor = 0;
  operacion_actual = 4;
  imprimir(0);
}

function porcentaje() {
  rescatar();
  valor_anterior = valor;
  valor = 0;
  operacion_actual = 5;
  imprimir(0);
}

function XX() {
  rescatar();
  valor_anterior = valor;
  let v1 = valor;
  valor = Math.abs(valor);
  let resultado = valor;
  operacion_actual = 1;
  imprimir_operacion(v1 + ")", "", "abs(", valor);
  imprimir(valor);
}

function n() {
  rescatar();
  valor_anterior = valor;
  let v1 = valor;
  let r = 1;
  for (let i = valor; i > 0; i--) {
    r *= i;
  }
  valor = r;

  operacion_actual = 1;
  imprimir_operacion(v1 + ")", "", "fact(", valor);
  imprimir(valor);
}

function negar() {
  rescatar();
  valor_anterior = valor;
  let v1 = valor;
  valor = valor * -1;
  let resultado = valor;
  operacion_actual = 1;
  imprimir_operacion("", v1, " *(-1)", valor);
  imprimir(valor);
}

function inversa() {
  rescatar();
  valor_anterior = valor;
  let v1 = valor;
  valor = 1 / valor;
  operacion_actual = 1;
  imprimir_operacion("", v1, " /1 ", valor);
  imprimir(valor);
}

function raiz() {
  rescatar();
  let v1 = valor;
  valor = Math.sqrt(valor);
  imprimir(valor);
  operacion_actual = 1;
  imprimir_operacion("", v1, " √ ", valor);
}

function retr() {
  valor = valor_anterior;
  imprimir(valor);
}

function igual() {
  rescatar();
  let valor1 = valor;
  let valor2 = valor_anterior;

  switch (operacion_actual) {
    case 1:
      //SUMA
      valor = valor + valor_anterior;
      break;
    case 2:
      //RESTA
      valor = valor_anterior - valor;
      break;
    case 3:
      //MULTIPLICAR
      valor = valor * valor_anterior;
      break;
    case 4:
      //DIVISION
      valor = valor_anterior / valor;
      break;
    case 5:
      //PORCENTAJE
      valor = (valor * valor_anterior) / 100;
      break;
    case 6:
      //exponente
      valor = Math.pow(valor, valor_anterior);
      break;
    case 7:
      //yroot
      valor = Math.pow(valor, 1 / valor_anterior);
      break;
    case 8:
      //logaritmo base
      valor = Math.log(valor) / Math.log(valor_anterior);
      break;
    case 9:
      //Modulo
      valor = valor = valor_anterior % valor;
      break;
    case 10:
      //e
      valor = valor = valor_anterior * Math.pow(10, valor);
      break;
  }
  imprimir_operacion(valor1, valor2, signos[operacion_actual - 1], valor);
  imprimir(valor);
  operacion_actual = -1;
  valor_anterior = 0;
}

function imprimir_operacion(v1, v2, operador, resultado) {
  if (operacion_actual != -1) {
    $("#historial").prepend(
      `<div class="historial_grupo"> <p class="historial_op"> ${v2} ${operador} ${v1} = ${resultado}  </p> 
       <p class="historial_res"> ${resultado} </p> </div>`
    );
    $("#pantalla-sup").html(
      `<p> ${v2} ${operador} ${v1} = ${resultado}  </p> `
    );

    operacion_actual = -1;
  }
}

function retr() {
  let temp = valor;
  valor = valor_anterior;
  valor_anterior = temp;
  imprimir(valor);
}

function C() {
  imprimir(0);
  valor = 0;
}

window.onload = function () {
  //función botones numerales
  $("#btn-1").click(function () {
    add(1);
  });

  $("#btn-2").click(function () {
    add(2);
  });

  $("#btn-3").click(function () {
    add(3);
  });

  $("#btn-4").click(function () {
    add(4);
  });

  $("#btn-5").click(function () {
    add(5);
  });

  $("#btn-6").click(function () {
    add(6);
  });

  $("#btn-7").click(function () {
    add(7);
  });

  $("#btn-8").click(function () {
    add(8);
  });

  $("#btn-9").click(function () {
    add(9);
  });

  $("#btn-0").click(function () {
    add(0);
  });

  //función botones operacionales
  $("#suma").click(function () {
    suma();
  });

  $("#resta").click(function () {
    resta();
  });

  $("#division").click(function () {
    division();
  });

  $("#multiplicacion").click(function () {
    multiplicar();
  });

  $("#fluctua").click(function () {
    fluctua();
  });

  $("#pi").click(function () {
    pi();
  });

  $("#e").click(function () {
    euler();
  });

  $("#c").click(function () {
    C();
  });

  $("#atras").click(function () {
    borrar_ultimo();
  });

  $("#x-cuadrado").click(function () {
    cuadrado_cubo();
  });

  $("#1-partido-x").click(function () {
    inversa();
  });

  $("#barra-x").click(function () {
    XX();
  });

  $("#exp").click(function () {
    expo();
  });

  $("#mod").click(function () {
    mod();
  });

  $("#2-raiz-x").click(function () {
    raiz_cucu();
  });

  $("#parentesis-1").click(function () {
    parentesis1();
  });

  $("#parentesis-2").click(function () {
    parentesis2();
  });

  $("#n").click(function () {
    n();
  });

  $("#x-elevado-y").click(function () {
    expo_raizde();
  });

  $("#diez-elevado-x").click(function () {
    elevar10_elevar2();
  });

  $("#log").click(function () {
    log_logbase();
  });

  $("#neperiano").click(function () {
    lognat_euler();
  });

  $("#mas-menos").click(function () {
    negar();
  });

  $("#punto").click(function () {
    add(".");
  });

  $("#igual").click(function () {
    igual();
  });
};
