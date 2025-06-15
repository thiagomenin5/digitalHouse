//Calculadora de Índice de Masa Corporal (IMC): Crea una función que calcule el IMC utilizando los parámetros de peso y altura. Usa operadores aritméticos y condicionales para evaluar diferentes rangos de IMC (bajo peso, peso normal, sobrepeso, etc.).
function imc(peso, altura) {
  let calculoImc = peso / (altura * altura);

  if (calculoImc < 18.5) {
    console.log("Resultado: Bajo peso");
  } else {
    if (calculoImc >= 18.5 && calculoImc < 25) {
      console.log("Resultado: Peso normal");
    } else {
      if (calculoImc >= 25 && calculoImc < 30) {
        console.log("Resultado: Sobrepeso");
      } else {
        console.log("Resultado: Obesidad");
      }
    }
  }
}
imc(55, 21.7);