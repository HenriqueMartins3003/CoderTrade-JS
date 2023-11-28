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

  
// Lista de Criptos

fetch("https://api.coincap.io/v2/assets").then(retorno =>{
  return retorno.json()
}).then(corpo => {
  const Bitcoin = corpo.data[0]

    let price_BTC = Bitcoin["priceUsd"]
    let cap_BTC = Bitcoin["marketCapUsd"]

    document.getElementById("price_BTC").innerHTML = price_BTC
    document.getElementById("cap_BTC").innerHTML = cap_BTC
//////////////////////////////////////////////////////////////////////
  const Ethereum  = corpo.data[1]
    let price_ETH = Ethereum["priceUsd"]
    let cap_ETH = Ethereum["marketCapUsd"]

    document.getElementById("price_ETH").innerHTML = price_ETH
    document.getElementById("cap_ETH").innerHTML = cap_ETH

////////////////////////////////////////////////////////////////////
  const Litecoin = corpo.data[16]

    let price_Lit = Litecoin["priceUsd"]
    let cap_Lit = Litecoin["marketCapUsd"]

    document.getElementById("price_Lit").innerHTML = price_Lit
    document.getElementById("cap_Lit").innerHTML = cap_Lit

  const tron = corpo.data[9]

    let price_tron = tron["priceUsd"]
    let cap_tron = tron["marketCapUsd"]

    document.getElementById("price_tron").innerHTML = price_tron
    document.getElementById("cap_tron").innerHTML = cap_tron 

  


})