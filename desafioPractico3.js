//Conversor de Monedas: Crea una función que convierta una cantidad de dinero de una moneda a otra. Usa variables para almacenar tasas de cambio y condicionales para manejar diferentes tipos de monedas.
function convertirMoneda(cantidad, monedaOrigen, monedaDestino) {
  let tasaUsdArs = 900;  // 1 USD = 900 ARS
  let tasaEurArs = 970;  // 1 EUR = 970 ARS
  let tasaUsdEur = 0.92; // 1 USD = 0.92 EUR

  let resultado = 0;

  if (monedaOrigen === "USD" && monedaDestino === "ARS") {
    resultado = cantidad * tasaUsdArs;
  } else {
    if (monedaOrigen === "EUR" && monedaDestino === "ARS") {
      resultado = cantidad * tasaEurArs;
    } else {
      if (monedaOrigen === "ARS" && monedaDestino === "USD") {
        resultado = cantidad / tasaUsdArs;
      } else {
        if (monedaOrigen === "ARS" && monedaDestino === "EUR") {
          resultado = cantidad / tasaEurArs;
        } else {
          if (monedaOrigen === "USD" && monedaDestino === "EUR") {
            resultado = cantidad * tasaUsdEur;
          } else {
            if (monedaOrigen === "EUR" && monedaDestino === "USD") {
              resultado = cantidad / tasaUsdEur;
            } else {
              console.log("Conversión no soportada.");
              return;
            }
          }
        }
      }
    }
  }

  console.log("Resultado:", resultado, monedaDestino);
}

convertirMoneda(100, "USD", "ARS"); // 100 USD a ARS
convertirMoneda(50000, "ARS", "USD"); // 50000 ARS a USD
convertirMoneda(200, "EUR", "USD"); // 200 EUR a USD