const getValueInput = () => {
  let a = document.querySelector("#domNum1Element").value;

  if (a % 2 === 0 || a % 3 === 0 || a % 5 === 0 || a % 7 === 0) {
    if (a % 2 === 0) {
      document.querySelector(
        "#divisor2"
      ).innerHTML = /* html */ `El número ${a} es múltiplo de 2`;
    }
    if (a % 3 === 0) {
        document.querySelector(
          "#divisor3"
        ).innerHTML = /* html */ `El número ${a} es múltiplo de 3`;
      }
     
    if (a % 5 === 0) {
        document.querySelector(
          "#divisor5"
        ).innerHTML = /* html */ `El número ${a} es múltiplo de 5`;
    }
    if (a % 7 === 0) {
        document.querySelector(
          "#divisor7"
        ).innerHTML = /* html */ `El número ${a} es múltiplo de 7`;
      }

  }
   else {
    document.querySelector(
      "#divisor"
    ).innerHTML = /* html */ `El número ${a} no es múltiplo de 2, ni de 3, ni de 5 ni de 7.`;
  }
};
