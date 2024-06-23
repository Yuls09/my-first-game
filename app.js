// para imprimir una frase
alert("Hola Mundo!");

// let + variable (para crear una variable)
// prompt para dar una indicación al usuario
let numeroSecreto = 6;
let numeroUsuario = prompt("Indica un número por favor:");

/* console.log(variable) para capturar la variable en la memoria del sistema */
console.log(numeroUsuario);

/* if condición y se usa crochete, alert, parentesis "mensaje a imprimir" 
y para imprimir un mensaje, para imprimir un mensaje captando el variable 
como parte de la respuesta se usa guillemet invertido (accent grave) ` $crocheteVariable` */

if(numeroSecreto == numeroUsuario) {
  alert(`¡Has acertado! El número secreto es: ${numeroSecreto}`)
}

// si la condición if no se cumple, de lo contrario
else {
  alert(`¡Lo siento! El número secreto no es: ${numeroUsuario}`)
}
