const getValueInput = () => {
    let a = document.querySelector("#domNum1Element").value;
    let b = document.querySelector("#domNum2Element").value;
    let c = document.querySelector("#domNum3Element").value;

    const array = [a, b, c]
    const bigNumber = Math.max(...array)
   
    document.querySelector('#largerNumber').innerHTML = /* html */`El número mayor es ${bigNumber}`;

}