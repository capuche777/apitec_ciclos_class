/*var contador;
for (var i = 1; i< 10; i++){
    contador = i*3;
}

console.log(contador);*/
/*-----------------------*/

/*Cuando se utilizan cilos anidados se deben usar dos variables
diferentes para cada ciclo*/

/*var contador;

for (var i = 0; i<10; i++) {
    for (var j = 0; j<i; i++) {

    }
}

/*por ejemplo en un tablero, i puede recorrer filas y j puede recorrer
columnas*/

/*var i = 0;
var contador;
while(i<10) {
    contador = i*3;
}
console.log(contador);*/
/*for (var i = 1; i<=100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}*/

/*var i = 1;
while (i<=100) {

    if (i % 2 == 0) {
        console.log(i);
    }
    i++
}*/

for (var base = 1;base <= 12; base++ ){
    for (var mult = 1; mult <= 12; mult++) {
        var result = mult*base;
        console.log(`${base} X ${mult} = ${result}`);
    }
    for (var mult = 1; mult <= 12; mult++) {
        var result = mult*base;
        if (base % 2 == 0 || mult % 2 == 0) {
            console.log(`${base} X ${mult} = ${result}`);
        }
    }
}

/*for (var i = 100; i>0; i--) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}*/

/*var i = 100;
while (i>0) {
    if (i % 2 !== 0) {
        console.log(i);    
    }
    i--;
}*/

/*for (var i = 0; i < 10; i++) {
    var mult = 4;
    var result = i*mult;
    console.log(`${i} x ${mult} = ${result}`);
}*/

/*calcular el promedio de 3 notas para N cantidad
de estudiantes, se debe solicitar el numeroo n con for y while*/

/*var estudiantes = Number(prompt('Que cantidad de estudiantes desea calcular'));
var promedio;

for (var i = 1; i<=estudiantes; i++){
    var nota = 0;
    for (var j = 1; j <= 3; j++) {
        var ingreso = Number(prompt(`Ingrese la nota ${j} de estudiante ${i}`));
        nota = nota+ingreso;
    }
    promedio=nota/3;
    alert(`El promedio es ${promedio}`);
}*/

/*Switch Case: en caso de*/

/*var nombre = 'Carlos';
switch (nombre) { //variable a evaluar entre parentesis
    case "Julio": console.log(1);
        break;

    case "Jeremias": alert(2);
        break;
    case "Carlos": alert(3);
        break;
    default: alert(4);
        break;
}*/