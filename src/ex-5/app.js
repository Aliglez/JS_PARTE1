const getValueInput = () => {
    let a = document.querySelector("#domNum1Element").value;
    let b = document.querySelector("#domNum2Element").value;
    // const suma = parseFloat(a) + parseFloat(b);
    if (a > b) {
        document.querySelector('#largerNumber').innerHTML = /* html */`El número ${a} es mayor que el númer ${b}`;
    }
    if (a == b) {
        document.querySelector('#largerNumber').innerHTML = /* html */`El número ${a} es igual que el número ${b}`;
    }
   else {
    document.querySelector('#largerNumber').innerHTML = /* html */`El número ${a} es menor que el número ${b}`;
   }

}
