/* * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: calculodias.js *
* Uso: Calcular el número de días transcurridos *
* desde la fecha de nacimiento hasta la *
* fecha actual del calendario. *
* * * * * * * * * * * * * * * * * * * * * * * * * * */
var temp = prompt("Ingrese la temperatura: ", "");



var  resultado=(temp* 9/5) +32;
//Variable para hacer referencia al elemento DIV
//donde se mostrará el número de años, meses y días
//que ha vivido la persona
var Celsius = document.getElementById('info')
var fahrenheit = document.getElementById('info')
document.write("la temperatura en celsius es: "+temp);
fahrenheit.innerHTML = '<h3>' +'la temperatura en fahrenheit es:' + resultado + '</h3>';
