// Comprobamos que tenemos los archivos conectados

console.log("conectado ejercicio 1")

// Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.

const title = "Hello JavaScript"
const titleSection = document.getElementById('title')

function printTitle() {
    titleSection.innerHTML = /* html */`
        <h1>${title}</h1>
        `
}

printTitle()