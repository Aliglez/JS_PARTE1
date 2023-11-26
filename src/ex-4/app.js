const getValueInput = () => {
    let a = document.querySelector("#domNum1Element").value;
    let b = document.querySelector("#domNum2Element").value;
    const suma = parseFloat(a) + parseFloat(b);

    document.querySelector('#sumaSection').innerHTML = /* html */`La suma de ${a} y de ${b} es ${suma}`;

}
