let a = 3
let b = 5

let resultado= a + b

const sumaSection = document.getElementById('suma')

function printResultado(){
    sumaSection.innerHTML = /* html */`
    <h3>La suma de ${a} + ${b} es ${resultado}<h3>
    `
}

printResultado()