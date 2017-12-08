var Calculadora= (function(){

  var Calculadora={}

  var Valor1=0, Valor2=0, Resultado=0;
  var Operacion="";

  var ValorPantalla=0;

  var RemplazarPantalla=true;

  var Pantalla=document.getElementById('display');

  function EscribirPantalla(valorIngresado) {
    if(RemplazarPantalla && ValorPantalla.toString().length<8){
      ValorPantalla=valorIngresado;
      RemplazarPantalla=false;
    }else if(ValorPantalla.toString().length<8){
      ValorPantalla+=valorIngresado;
    }
    Pantalla.innerHTML=ValorPantalla;
  }

  var On=document.getElementById('on');

  On.addEventListener("click",function(event) {
    LimpiarPantalla();
  })

  var Signo=document.getElementById('sign');

  Signo.addEventListener("click",function(event) {
    ValorPantalla=ValorPantalla*(-1);
    RemplazarPantalla=true;
    EscribirPantalla(ValorPantalla);
  })

  var Suma=document.getElementById('mas');
  Suma.addEventListener("click",function (event) {

      Operacion=this.getAttribute('alt');
      Valor1=parseFloat(ValorPantalla);
      LimpiarPantalla();
  })

  var Resta=document.getElementById('menos');
  Resta.addEventListener("click",function (event) {

      Operacion=this.getAttribute('alt');
      Valor1=parseFloat(ValorPantalla);
      LimpiarPantalla();
  })

  var Multipicacion=document.getElementById('por');
  Multipicacion.addEventListener("click",function (event) {

      Operacion=this.getAttribute('alt');
      Valor1=parseFloat(ValorPantalla);
      LimpiarPantalla();
  })

  var Division=document.getElementById('dividido');
  Division.addEventListener("click",function (event) {

      Operacion=this.getAttribute('alt');
      Valor1=parseFloat(ValorPantalla);
      LimpiarPantalla();
  })

  var Igual=document.getElementById('igual');
  Igual.addEventListener("click",function(event) {
    Valor2=parseFloat(ValorPantalla);
      switch (Operacion) {
        case "mas":
          Resultado=Valor1+Valor2;
          RemplazarPantalla=true;
          EscribirPantalla(Resultado.toString());
          break;
        case "menos":
        Resultado=Valor1-Valor2;
        RemplazarPantalla=true;
        EscribirPantalla(Resultado.toString());
        break;
        case "menos":
        Resultado=Valor1-Valor2;
        RemplazarPantalla=true;
        EscribirPantalla(Resultado.toString());
        break;
        case "por":
        Resultado=Valor1*Valor2;
        RemplazarPantalla=true;
        EscribirPantalla(Resultado.toString());
        break;
        case "dividido":
        if(Valor2!=0){
        Resultado=Valor1/Valor2;
        }
        else{
          Resultado="Error";
        }
        RemplazarPantalla=true;
        EscribirPantalla(Resultado.toString());
        break;
        default:
        var Prueba="";
        break;

      }
  })

  function LimpiarPantalla() {
    RemplazarPantalla=true;
      Pantalla.innerHTML=0;
      ValorPantalla=0;
  }

  var Numero0=document.getElementById('0');

  Numero0.addEventListener("click",function(event) {
      var valor=this.getAttribute("alt");
      EscribirPantalla(valor);
  })

  var Numero1=document.getElementById('1');

  Numero1.addEventListener("click",function(event) {
      var valor=this.getAttribute("alt");
      EscribirPantalla(valor);
  })

  var Numero2=document.getElementById('2');

  Numero2.addEventListener("click",function(event) {
      var valor=this.getAttribute("alt");
      EscribirPantalla(valor);
  })

  var Numero3=document.getElementById('3');

 Numero3.addEventListener("click",function(event) {
     var valor=this.getAttribute("alt");
     EscribirPantalla(valor);
 })

 var Numero4=document.getElementById('4');

 Numero4.addEventListener("click",function(event) {
     var valor=this.getAttribute("alt");
     EscribirPantalla(valor);
 })

 var Numero5=document.getElementById('5');

 Numero5.addEventListener("click",function(event) {
     var valor=this.getAttribute("alt");
     EscribirPantalla(valor);
 })

 var Numero6=document.getElementById('6');

 Numero6.addEventListener("click",function(event) {
     var valor=this.getAttribute("alt");
     EscribirPantalla(valor);
 })

 var Numero7=document.getElementById('7');

 Numero7.addEventListener("click",function(event) {
     var valor=this.getAttribute("alt");
     EscribirPantalla(valor);
 })

 var Numero8=document.getElementById('8');

 Numero8.addEventListener("click",function(event) {
     var valor=this.getAttribute("alt");
     EscribirPantalla(valor);
 })

 var Numero9=document.getElementById('9');

 Numero9.addEventListener("click",function(event) {
     var valor=this.getAttribute("alt");
     EscribirPantalla(valor);
 })


})();
