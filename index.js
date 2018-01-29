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

/*for (var i = 100; i>0; i--) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}*/

var i = 100;
while (i>0) {
    if (i % 2 !== 0) {
        console.log(i);    
    }
    i--;
}