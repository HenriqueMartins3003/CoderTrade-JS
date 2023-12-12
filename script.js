const btcElement = document
  .getElementById("Lista1")
  .getAttribute("data-currency");
const ethElement = document
  .getElementById("Lista2")
  .getAttribute("data-currency");
const ltcElement = document
  .getElementById("Lista3")
  .getAttribute("data-currency");
const trxElement = document
  .getElementById("Lista4")
  .getAttribute("data-currency");

const getCriptoPrices = async (cripto, coin) => {
  const response = await fetch(
    `https://api.coinbase.com/v2/prices/${coin}-${cripto}/sell`
  );

  const data = await response.json();

  // console.log(data.data.amount);

  return data.data.amount;
};

const handleclickExchange = async () => {
  const criptoScreen = document.getElementById("criptoSelect").value;
  const coinScreen = document.getElementById("coinSelect").value;
  const coinPrice = document.getElementById("coinPrice");
  const criptoPrice = document.getElementById("criptoPrice");

  const criptoAmount = await getCriptoPrices(criptoScreen, coinScreen);

  // console.log(`Cripto: ${criptoAmount} Screen: ${criptoScreen}`);

  if (coinPrice.value == 0 || coinPrice.value == 1) {
    coinPrice.value = 1;
    criptoPrice.value = parseFloat(criptoAmount).toFixed(7);
  } else {
    criptoPrice.value = parseFloat(coinPrice.value * criptoAmount).toFixed(7);
  }
};

///// inicio area - Lista de Criptos
setInterval(function () {
  ////Função para atualizar a lista por segundo////
  fetch("https://api.coincap.io/v2/assets") /// chamada da API ///
    .then((retorno) => {
      return retorno.json();
    })

    .then((corpo) => {
      //////////////////////////// Bitcoin //////////////////////////////////////////
      const Bitcoin = corpo.data[0];

      let price_BTC = parseFloat(Bitcoin["priceUsd"]);
      let cap_BTC = parseFloat(Bitcoin["marketCapUsd"]);

      document.getElementById("cap_BTC").innerHTML = `${cap_BTC.toLocaleString(
        "en-US",
        { style: "currency", currency: "USD" }
      )}b`;
      document.getElementById("price_BTC").innerHTML = price_BTC.toLocaleString(
        "en-US",
        { style: "currency", currency: "USD" }
      );

      //////////////////////////////// Ethereum //////////////////////////////////////
      const Ethereum = corpo.data[1];

      let price_ETH = parseFloat(Ethereum["priceUsd"]);
      let cap_ETH = parseFloat(Ethereum["marketCapUsd"]);

      document.getElementById("price_ETH").innerHTML = price_ETH.toLocaleString(
        "en-US",
        { style: "currency", currency: "USD" }
      );
      document.getElementById("cap_ETH").innerHTML = `${cap_ETH.toLocaleString(
        "en-US",
        { style: "currency", currency: "USD" }
      )}b`;

      //////////////////////////// Litecoin ////////////////////////////////////////
      const Litecoin = corpo.data[16];

      let price_Lit = parseFloat(Litecoin["priceUsd"]);
      let cap_Lit = parseFloat(Litecoin["marketCapUsd"]);

      document.getElementById("price_Lit").innerHTML = price_Lit.toLocaleString(
        "en-US",
        { style: "currency", currency: "USD" }
      );
      document.getElementById("cap_Lit").innerHTML = `${cap_Lit.toLocaleString(
        "en-US",
        { style: "currency", currency: "USD" }
      )}b`;

      /////////////////////////////// tron /////////////////////////////////////

      const tron = corpo.data[9];

      let price_tron = parseFloat(tron["priceUsd"]);
      let cap_tron = parseFloat(tron["marketCapUsd"]);

      document.getElementById("price_tron").innerHTML =
        price_tron.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      document.getElementById(
        "cap_tron"
      ).innerHTML = `${cap_tron.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}b`;
    });
}, 1000);

/// Bloco para esconder e mostrar o conteudo///
var mais_BTC = document.querySelector(`.mais_BTC`);
var conteiner_BTC = document.querySelector(`.grafico_BTC`);

var mais_ETH = document.querySelector(`.mais_ETH`);
var conteiner_ETH = document.querySelector(`.grafico_ETH`);

var mais_LIT = document.querySelector(`.mais_LIT`);
var conteiner_LIT = document.querySelector(`.grafico_LIT`);

var mais_TRON = document.querySelector(`.mais_TRON`);
var conteiner_TRON = document.querySelector(`.grafico_TRON`);

mais_BTC.addEventListener(`click`, function () {
  if (conteiner_BTC.style.display === `block`) {
    conteiner_BTC.style.display = `none`;
  } else {
    conteiner_BTC.style.display = `block`;
  }
});
//////////////////////////////////////////////////////////
mais_ETH.addEventListener(`click`, function () {
  if (conteiner_ETH.style.display === `block`) {
    conteiner_ETH.style.display = `none`;
  } else {
    conteiner_ETH.style.display = `block`;
  }
});

//////////////////////////////////////////////////////////
mais_LIT.addEventListener(`click`, function () {
  if (conteiner_LIT.style.display === `block`) {
    conteiner_LIT.style.display = `none`;
  } else {
    conteiner_LIT.style.display = `block`;
  }
});

//////////////////////////////////////////////////////////
mais_TRON.addEventListener(`click`, function () {
  if (conteiner_TRON.style.display === `block`) {
    conteiner_TRON.style.display = `none`;
  } else {
    conteiner_TRON.style.display = `block`;
  }
});
//////////////////////////////////////////////////////////

///// Fim area - Lista de Criptos
