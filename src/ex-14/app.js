const getValueInput = () => {
    let a = document.querySelector("#domNum1Element").value;
    let b = document.querySelector("#domNum2Element").value;
    let divisorArray = [];
    
    if (a<b) {
        menor = a
    }
    else {
        nenor = b
    }

    for(let i=1; i<(menor); i++){
        if((a % i)==0 && (b % i)==0){
        divisorArray.push(i);
        }
    }       
    
    if(divisorArray.length === 0){
        document.querySelector('#divisor').innerHTML = /* html */ `El número ${a} y el número ${b} no tienen divisores en común.`;
    
    }

    else {
        document.querySelector('#divisor').innerHTML = /* html */`El número ${a} y el número ${b}  tienen en común los siguientes divisores: ${divisorArray}`;
    }
}
      