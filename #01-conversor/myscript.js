var valorEmDolar = 30;
var cotacaoDoDolar = 5.32;
var cotacaoDoBitcoin = 0.000028;

const nome = "Josifar";

var valorEmReal = valorEmDolar*cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
var valorEmBitcoin = valorEmDolar*cotacaoDoBitcoin;
valorEmBitcoin = valorEmBitcoin.toFixed(5);

alert("Olá " + nome)
alert("US$" + valorEmDolar + " = R$"+valorEmReal);
alert("US$"+ valorEmDolar + " = ₿"+valorEmBitcoin);


var distanciaEmAnosLuz = 1.5;
var distanciaEmKm = (distanciaEmAnosLuz * 9461000000000).toFixed(2);

alert(distanciaEmKm + "km = " + distanciaEmAnosLuz + " Anos-Luz");

