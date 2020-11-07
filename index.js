
var num1 = document.getElementById("num1");
num1.addEventListener("click", adicionarValorNaTela);
var num2 = document.getElementById("num2");
num2.addEventListener("click", adicionarValorNaTela);
var num3 = document.getElementById("num3");
num3.addEventListener("click", adicionarValorNaTela);
var num4 = document.getElementById("num4");
num4.addEventListener("click", adicionarValorNaTela);
var num5 = document.getElementById("num5");
num5.addEventListener("click", adicionarValorNaTela);
var num6 = document.getElementById("num6");
num6.addEventListener("click", adicionarValorNaTela);
var num7 = document.getElementById("num7");
num7.addEventListener("click", adicionarValorNaTela);
var num8 = document.getElementById("num8");
num8.addEventListener("click", adicionarValorNaTela);
var num9 = document.getElementById("num9");
num9.addEventListener("click", adicionarValorNaTela);
var num0 = document.getElementById("num0");
num0.addEventListener("click", adicionarValorNaTela);
var mais = document.getElementById("mais");
mais.addEventListener("click", adicionarValorNaTela);
var menos = document.getElementById("menos");
menos.addEventListener("click", adicionarValorNaTela);
var vezes = document.getElementById("vezes");
vezes.addEventListener("click", adicionarValorNaTela);
var dividir = document.getElementById("dividir");
dividir.addEventListener("click", adicionarValorNaTela);
var limpar = document.getElementById("limpar");
limpar.addEventListener("click", limparValores);
var calcular = document.getElementById("calcular");
calcular.addEventListener("click", calcularValores);


function adicionarValorNaTela(elemento) {
    var valores = document.getElementById("valores");
    var valorElemento = elemento.srcElement.innerText;

    var ultimoDigito = valores.value.substr(valores.value.length - 1);

    var valorAtualEhUmOperador = ehUmOperador(valorElemento)
    var ultimoDigitoEhUmOperador = ehUmOperador(ultimoDigito)

    if (ultimoDigitoEhUmOperador && valorAtualEhUmOperador) {
        var todosDigitosMenosUltimo = valores.value.substr(0, valores.value.length - 1)
        valores.value = todosDigitosMenosUltimo + valorElemento;
    } else {
        valores.value = valores.value + valorElemento;
    }
}

function ehUmOperador(valor) {
    return valor === "+" 
        || valor === "-" 
        || valor === "×" 
        || valor === "÷";
}   

function limparValores() {
    var valores = document.getElementById("valores");
    valores.value = "";
}

function calcularValores() {
    var valores = document.getElementById("valores");
    var numeros = valores.value.split
}