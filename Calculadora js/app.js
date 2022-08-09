const notaone = document.getElementById("nota1");
const notatwo = document.getElementById("nota2");
// const signo = document.getElementById("signo");

const necesidad =document.getElementById("necesario");

const suma =document.getElementById("suma");
const resta =document.getElementById("resta");
const multiplicacion =document.getElementById("multiplicacion");
const division = document.getElementById("division");
const modulo = document.getElementById("modulo");

// const inputcolor = document.getElementById("color");

btnSuma.addEventListener("click",addSuma);
btnResta.addEventListener("click",addResta);
// inputcolor.addEventListener("change",addcolor)
btnMultiplicacion.addEventListener("click",addMultiplicacion);
btnDivision.addEventListener("click",addDivision);
// btnModulo.addEventListener("click",addModulo);

// function addcolor() {
//     body.style.backgroundColor = color.value
// }
function addSuma (){
    let data = Number(nota1.value);
    let data1 = Number(nota2.value);
    // let signoOP = String(signo.value);
        
    
    suma.textContent = "el resultado de la suma es: " + (data + data1);
    
}

function addResta() {
    let data = Number(nota1.value);
    let data1 = Number(nota2.value);
    
    resta.textContent = "el resultado de la Resta es: " + (data - data1);
}

function addMultiplicacion() {
    let data = Number(nota1.value);
    let data1 = Number(nota2.value);
    
    multiplicacion.textContent = "el resultado de la multiplicacion es:  " + (data * data1); 

}    

function addDivision(){
    let data = Number(nota1.value);
    let data1 = Number(nota2.value);

    division.textContent = "el resultado de la divisiones: " + (data / data1).toFixed(2);

}

// function addModulo(){
//     let data = Number(nota1.value);
//     let data1 = Number(nota2.value);

    
// }



//background-blend-mode: color;