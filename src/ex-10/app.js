document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let sentence = document.getElementById("text").value;
    let a = (sentence.match(/a/g) || []).length;
    let e = (sentence.match(/e/g) || []).length;
    let i = (sentence.match(/i/g) || []).length;
    let o = (sentence.match(/o/g) || []).length;
    let u = (sentence.match(/u/g) || []).length;
  
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "Esta frase tiene: " + a + " vocales 'a', " + e + " vocales 'e', " + i + " vocales 'i', " + o + " vocales 'o' y " + u + " vocales 'u'.";
  });