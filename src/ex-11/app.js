const getValueInput = () => {
    let a = document.querySelector("#domNum1Element").value;
    
    if((parseFloat(a) % 2)===0){
        document.querySelector('#divisor').innerHTML = /* html */`El número ${a} es múltiplo de 2`;
    }
    else {
        document.querySelector('#divisor').innerHTML = /* html */`El número ${a} no es múltiplo de 2`;
    }
    
}