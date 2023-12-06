document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let sentence = document.getElementById("text").value;
    let count = (sentence.match(/[aeiou]/g) || []);
  
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "La frase tiene " + count + " vocales";
  });