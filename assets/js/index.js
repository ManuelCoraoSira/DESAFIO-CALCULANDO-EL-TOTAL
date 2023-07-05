function calcularTotal(){
const precio = 50000
const cantidadInput = document.querySelector ('input[type=number]').value; // string
const colorInput = document.querySelector ('.colorclase').value; 

const precioFinal = document.querySelector ('.valor-total');
const cantidadFinal = document.querySelector ('.cantidad-total');
const colorFinal = document.querySelector ('.colorCambiar');

const precioFinalCalculado = cantidadInput * precio //'5' * 50000
precioFinal.innerHTML = precioFinalCalculado.toLocaleString();
cantidadFinal. innerHTML = cantidadInput;
colorFinal.style.backgroundColor = colorInput;  
}