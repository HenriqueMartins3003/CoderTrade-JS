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

const getCriptoPrices = async (cripto) => {
  const response = await fetch("https://api.coincap.io/v2/assets");

  const data = await response.json();
  const price = data.data;

  const currency = price.find((item) => item.symbol == cripto);
  //console.log(currency);
  //console.log(currency.priceUsd);
  return currency.priceUsd;
};

const handleclickExchange = async () => {
  const screenCurrency = document.getElementById("criptoPrice");
  const cripto = await getCriptoPrices(ethElement);
  console.log(`Cripto: ${cripto} Screen: ${screenCurrency}`);
  screenCurrency.innerHTML = `jkcjsdklvj;kvopf`;
};

// Lista de Criptos

fetch("https://api.coincap.io/v2/assets")
  .then((retorno) => {
    return retorno.json();
  })
  .then((corpo) => {
    const Bitcoin = corpo.data[0];

    let price_BTC = parseFloat(Bitcoin["priceUsd"]).toFixed(2);
    let cap_BTC = parseFloat(Bitcoin["marketCapUsd"]).toFixed(2);

    document.getElementById("price_BTC").innerHTML = `$ ${price_BTC}`;
    document.getElementById("cap_BTC").innerHTML = `$ ${cap_BTC}b`;
    //////////////////////////////////////////////////////////////////////
    const Ethereum = corpo.data[1];
    let price_ETH = parseFloat(Ethereum["priceUsd"]).toFixed(2);
    let cap_ETH = parseFloat(Ethereum["marketCapUsd"]).toFixed(2);

    document.getElementById("price_ETH").innerHTML = `$ ${price_ETH}`;
    document.getElementById("cap_ETH").innerHTML = `$ ${cap_ETH}b`;

    ////////////////////////////////////////////////////////////////////
    const Litecoin = corpo.data[16];

    let price_Lit = parseFloat(Litecoin["priceUsd"]).toFixed(2);
    let cap_Lit = parseFloat(Litecoin["marketCapUsd"]).toFixed(2);

    document.getElementById("price_Lit").innerHTML = `$ ${price_Lit}`;
    document.getElementById("cap_Lit").innerHTML = `$ ${cap_Lit}b`;

    const tron = corpo.data[9];

    let price_tron = parseFloat(tron["priceUsd"]).toFixed(2);
    let cap_tron = parseFloat(tron["marketCapUsd"]).toFixed(2);

    document.getElementById("price_tron").innerHTML = `$ ${price_tron}`;
    document.getElementById("cap_tron").innerHTML = `$ ${cap_tron}b`;
  });
