let number = 3;
console.log ("Dado el número " + number)

for (let i = 1; i <= number ; i++) {
    let resultado = i * number;

    console.log ( i + " x " + number + " = " + resultado)
}

console.log ("Ahora calculamos factoriales")

let numeroFactorial = 3;
let factorial = 1;

for (let i = 1; i <= numeroFactorial; i++) {
    factorial = factorial * i;

    console.log ("Factorial de " + i + " es: " + factorial)
}



