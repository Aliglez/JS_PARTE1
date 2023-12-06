const getValueInput = () => {
    let a = document.querySelector("#domNum1Element").value;
    let divisorArray = [];
    
    for(let i=2; i<a; i++){
        if((a % i)==0){
        divisorArray.push(i);
        }
    }       
    
    if(divisorArray.length === 0){
        document.querySelector('#divisor').innerHTML = /* html */ `El número ${a} es primo, no es divisible por ningún número.`;
    
    }

    else {
        document.querySelector('#divisor').innerHTML = /* html */`El número ${a} no es primo`;
    }
}
    