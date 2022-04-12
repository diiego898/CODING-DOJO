//¿Qué indicará console.log cuando se llame a esta función?
function myBirthYearFunc(){
    console.log("Nací en " + 1980);
}
// console.log indicará que nací en 1980.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Entonces, si la variable EntradaAñoNacimiento es 1980 (también conocida como var EntradaAñoNacimiento = 1980), y se llama a esta función, ¿qué indicará console.log?
function myBirthYearFunc(EntradaAñoNacimiento){
    console.log("Nací en " + EntradaAñoNacimiento);
}
// console.log indicara el año de nacimiento que tu pongas como variable en "EntradaAñoNacimiento" que en este caso es 1989.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Intentémoslo otra vez. Si var num1 = 10 y var num2 = 20, ¿qué indicaría console.log?
function add(num1, num2){
    console.log("¡Sumando números!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
//console.log indica el valor de sum que es la suma de la variable 1 y la variable 2 que en este caso el resultado seria 30.