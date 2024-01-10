
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

function atualizarTabela() {
  fetch("https://api.coincap.io/v2/assets") // /// Chamada da API  
      .then((retorno) => retorno.json())
      .then((corpo) => {

          let lista_tabela = document.getElementById("tabela_lista");

          lista_tabela.innerHTML = ''; /// Comando para limpar a tabela quanto atualiza.

          for (let i = 0; i <= 100; i++) {
            
              ////Filtro de informaçoes da API 
              const cripto = corpo.data[i];
              let nome_cripto = cripto["id"];
              let price = parseFloat(cripto["priceUsd"]);
              let cap = parseFloat(cripto["marketCapUsd"]);
              let rank_cripto ="+";

              let linha_tr = document.createElement("tr");
                let rank_td = document.createElement("td");
                let icone_td = document.createElement("td");
                let nome_td = document.createElement("td");
                let price_td = document.createElement("td");
                let market_cap_td = document.createElement("td");

                rank_td.setAttribute("class","estilo_td2");
                icone_td.setAttribute("class","estilo_td2");
                nome_td.setAttribute("class","estilo_td");
                price_td.setAttribute("class","estilo_td");
                market_cap_td.setAttribute("class","estilo_td");


              let supply = parseFloat(cripto["supply"]);;
              let volumeUsd24Hr = parseFloat(cripto["volumeUsd24Hr"]);
              let changePercent24Hr = parseFloat(cripto["supply"]);
              let vwap24Hr = parseFloat(cripto["supply"]);

              let caixa_tr = document.createElement("tr"); //Elemento que ira conter as informaçoes adicionais da Cripto
                let rank_t= document.createElement("td");
                let supply_td= document.createElement("td");
                let volumeUsd24Hr_td= document.createElement("td");
                let changePercent24Hr_td= document.createElement("td");
                let vwap24Hr_td= document.createElement("td");

                price_td.textContent = price.toLocaleString("en-US", { style: "currency", currency: "USD" }) ;
                market_cap_td.textContent = cap.toLocaleString("en-US", { style: "currency", currency: "USD" });
                rank_td.textContent = rank_cripto;
                nome_td.textContent = nome_cripto;
                supply_td.textContent =`supply:  ${supply.toLocaleString("en-US", { style: "currency", currency: "USD" })}`
                volumeUsd24Hr_td.textContent = `volumeUsd24Hr: ${volumeUsd24Hr.toLocaleString("en-US", { style: "currency", currency: "USD" })}`
                changePercent24Hr_td.textContent = `changePercent24Hr: ${changePercent24Hr.toLocaleString("en-US", { style: "currency", currency: "USD" })}`
                vwap24Hr_td.textContent = `vwap24Hr: ${vwap24Hr.toLocaleString("en-US", { style: "currency", currency: "USD" })}`

                linha_tr.appendChild(rank_td);
                linha_tr.appendChild(icone_td);
                linha_tr.appendChild(nome_td);
                linha_tr.appendChild(price_td);
                linha_tr.appendChild(market_cap_td);
            
                lista_tabela.appendChild(linha_tr);
                lista_tabela.appendChild(caixa_tr);
            
                caixa_tr.setAttribute("class","mais_info");
                caixa_tr.setAttribute("id",nome_cripto+"tab");
                linha_tr.setAttribute("id",nome_cripto+"li");
                 
                caixa_tr.appendChild(rank_t);
                caixa_tr.appendChild(supply_td);
                caixa_tr.appendChild(volumeUsd24Hr_td);
                caixa_tr.appendChild(changePercent24Hr_td);
                caixa_tr.appendChild(vwap24Hr_td);

                linha_tr.addEventListener("click",function(){ //Função para expandir as informaçoes da Cripto  

                  if( caixa_tr.className === "mais_info"){
                    caixa_tr.className = "mais_info_completa"
                  }
                  else {
                    caixa_tr.className = "mais_info"
                  }
                });
                  /////////// Condição para alterar o ícone da cripto.  ///////
              if(nome_cripto === "bitcoin"){icone_td.setAttribute("class","bitcoin")}
              else if (nome_cripto === "ethereum"){icone_td.setAttribute("class","ethereum")}
              else if (nome_cripto === "tether"){icone_td.setAttribute("class","tether")}
              else if (nome_cripto === "binance-coin"){icone_td.setAttribute("class","binance-coin")}
              else if (nome_cripto === "dogecoin"){icone_td.setAttribute("class","dogecoin")}
              else if (nome_cripto === "polygon"){icone_td.setAttribute("class","polygon")}
              else if (nome_cripto === "solana"){icone_td.setAttribute("class","solana")}
              else if (nome_cripto === "avalanche"){icone_td.setAttribute("class","avalanche")}
              else if (nome_cripto === "xrp"){icone_td.setAttribute("class","xrp")}
              else if (nome_cripto === "usd-coin"){icone_td.setAttribute("class","usd-coin")}
              else if (nome_cripto === "cardano"){icone_td.setAttribute("class","cardano")}
              else if (nome_cripto === "tron"){icone_td.setAttribute("class","tron")}
              else if (nome_cripto === "polkadot"){icone_td.setAttribute("class","polkadot")}
              else if (nome_cripto === "chainlink"){icone_td.setAttribute("class","chainlink")}
              else if (nome_cripto === "wrapped-bitcoin"){icone_td.setAttribute("class","wrapped-bitcoin")}
              else if (nome_cripto === "shiba-inu"){icone_td.setAttribute("class","shiba-inu")}
              else if (nome_cripto === "litecoin"){icone_td.setAttribute("class","litecoin")}
              else if (nome_cripto === "multi-collateral-dai"){icone_td.setAttribute("class","multi-collateral-dai")}
              else if (nome_cripto === "bitcoin-cash"){icone_td.setAttribute("class","bitcoin-cash")}
              else if (nome_cripto === "uniswap"){icone_td.setAttribute("class","uniswap")}
              else if (nome_cripto === "stellar"){icone_td.setAttribute("class","stellar")}
              else if (nome_cripto === "unus-sed-leo"){icone_td.setAttribute("class","unus-sed-leo")}
              else if (nome_cripto === "monero"){icone_td.setAttribute("class","monero")}
              else if (nome_cripto === "ethereum-classic"){icone_td.setAttribute("class","ethereum-classic")}
              else if (nome_cripto === "internet-computer"){icone_td.setAttribute("class","internet-computer")}
              else if (nome_cripto === "cosmos"){icone_td.setAttribute("class","cosmos")}
              else if (nome_cripto === "trueusd"){icone_td.setAttribute("class","trueusd")}
              else if (nome_cripto === "crypto-com-coin"){icone_td.setAttribute("class","crypto-com-coin")}
              else if (nome_cripto === "injective-protocol"){icone_td.setAttribute("class","injective-protocol")}
              else if (nome_cripto === "near-protocol"){icone_td.setAttribute("class","near-protocol")}
              else if (nome_cripto === "bitcoin-bep2"){icone_td.setAttribute("class","bitcoin-bep2")}
              else if (nome_cripto === "filecoin"){icone_td.setAttribute("class","filecoin")}
              else if (nome_cripto === "vechain"){icone_td.setAttribute("class","vechain")}
              else if (nome_cripto === "lido-dao"){icone_td.setAttribute("class","lido-dao")}
              else if (nome_cripto === "thorchain"){icone_td.setAttribute("class","thorchain")}
              else if (nome_cripto === "render-token"){icone_td.setAttribute("class","render-token")}
              else if (nome_cripto === "algorand"){icone_td.setAttribute("class","algorand")}
              else if (nome_cripto === "the-graph"){icone_td.setAttribute("class","the-graph")}
              else if (nome_cripto === "ftx-token"){icone_td.setAttribute("class","ftx-token")}
              else if (nome_cripto === "stacks"){icone_td.setAttribute("class","stacks")}
              else if (nome_cripto === "elrond-egld"){icone_td.setAttribute("class","elrond-egld")}
              else if (nome_cripto === "aave"){icone_td.setAttribute("class","aave")}
              else if (nome_cripto === "quant"){icone_td.setAttribute("class","quant")}
              else if (nome_cripto === "wemix"){icone_td.setAttribute("class","wemix")}
              else if (nome_cripto === "storj"){icone_td.setAttribute("class","storj")}
              else if (nome_cripto === "compound"){icone_td.setAttribute("class","compound")}
              else if (nome_cripto === "binance-usd"){icone_td.setAttribute("class","binance-usd")}
              else if (nome_cripto === "maker"){icone_td.setAttribute("class","maker")}
              else if (nome_cripto === "ethereum"){icone_td.setAttribute("class","ethereum")}
              else if (nome_cripto === "hedera-hashgraph"){icone_td.setAttribute("class","hedera-hashgraph")}
              else if (nome_cripto === "fantom"){icone_td.setAttribute("class","fantom")}
              else if (nome_cripto === "flow"){icone_td.setAttribute("class","flow")}
              else if (nome_cripto === "theta"){icone_td.setAttribute("class","theta")}
              else if (nome_cripto === "the-sandbox"){icone_td.setAttribute("class","the-sandbox")}
              else if (nome_cripto === "kucoin-token"){icone_td.setAttribute("class","kucoin-token")}
              else if (nome_cripto === "helium"){icone_td.setAttribute("class","helium")}
              else if (nome_cripto === "synthetix-network-token"){icone_td.setAttribute("class","synthetix-network-token")}
              else if (nome_cripto === "axie-infinity"){icone_td.setAttribute("class","axie-infinity")}
              else if (nome_cripto === "bitcoin-sv"){icone_td.setAttribute("class","bitcoin-sv")}
              else if (nome_cripto === "decentraland"){icone_td.setAttribute("class","decentraland")}
              else if (nome_cripto === "tezos"){icone_td.setAttribute("class","tezos")}
              else if (nome_cripto === "neo"){icone_td.setAttribute("class","neo")}
              else if (nome_cripto === "iota"){icone_td.setAttribute("class","iota")}
              else if (nome_cripto === "eos"){icone_td.setAttribute("class","eos")}
              else if (nome_cripto === "gala"){icone_td.setAttribute("class","gala")}
              else if (nome_cripto === "kava"){icone_td.setAttribute("class","kava")}
              else if (nome_cripto === "klaytn"){icone_td.setAttribute("class","klaytn")}
              else if (nome_cripto === "mina"){icone_td.setAttribute("class","mina")}
              else if (nome_cripto === "frax-share"){icone_td.setAttribute("class","frax-share")}
              else if (nome_cripto === "ecash"){icone_td.setAttribute("class","ecash")}
              else if (nome_cripto === "chiliz"){icone_td.setAttribute("class","chiliz")}
              else if (nome_cripto === "conflux-network"){icone_td.setAttribute("class","conflux-network")}
              else if (nome_cripto === "pancakeswap"){icone_td.setAttribute("class","pancakeswap")}
              else if (nome_cripto === "xinfin-network"){icone_td.setAttribute("class","xinfin-network")}
              else if (nome_cripto === "arweave"){icone_td.setAttribute("class","arweave")}
              else if (nome_cripto === "curve-dao-token"){icone_td.setAttribute("class","curve-dao-token")}
              else if (nome_cripto === "aelf"){icone_td.setAttribute("class","aelf")}
              else if (nome_cripto === "gnosis-gno"){icone_td.setAttribute("class","gnosis-gno")}
              else if (nome_cripto === "oasis-network"){icone_td.setAttribute("class","oasis-network")}
              else if (nome_cripto === "rocket-pool"){icone_td.setAttribute("class","rocket-pool")}
              else if (nome_cripto === "fetch"){icone_td.setAttribute("class","fetch")}
              else if (nome_cripto === "dydx"){icone_td.setAttribute("class","dydx")}
              else if (nome_cripto === "zcash"){icone_td.setAttribute("class","zcash")}
              else if (nome_cripto === "casper"){icone_td.setAttribute("class","casper")}
              else if (nome_cripto === "akash-network"){icone_td.setAttribute("class","akash-network")}
              else if (nome_cripto === "trust-wallet-token"){icone_td.setAttribute("class","trust-wallet-token")}
              else if (nome_cripto === "gatetoken"){icone_td.setAttribute("class","gatetoken")}
              else if (nome_cripto === "nexo"){icone_td.setAttribute("class","nexo")}
              else if (nome_cripto === "gas"){icone_td.setAttribute("class","gas")}
              else if (nome_cripto === "huobi-token"){icone_td.setAttribute("class","huobi-token")}
              else if (nome_cripto === "1inch"){icone_td.setAttribute("class","o1inch")}
              else if (nome_cripto === "singularitynet"){icone_td.setAttribute("class","singularitynet")}
              else if (nome_cripto === "holo"){icone_td.setAttribute("class","holo")}
              else if (nome_cripto === "dash"){icone_td.setAttribute("class","dash")}
              else if (nome_cripto === "illuvium"){icone_td.setAttribute("class","illuvium")}
              else if (nome_cripto === "paxos-standard"){icone_td.setAttribute("class","paxos-standard")}
              else if (nome_cripto === "basic-attention-token"){icone_td.setAttribute("class","basic-attention-token")}
              else if (nome_cripto === "nem"){icone_td.setAttribute("class","nem")} 
              else if (nome_cripto === "zilliqa"){icone_td.setAttribute("class","zilliqa")} 
              else if (nome_cripto === "fei-protocol"){icone_td.setAttribute("class","fei-protocol")} 
              else if (nome_cripto === "siacoin"){icone_td.setAttribute("class","siacoin")} 
              else if (nome_cripto === "loopring"){icone_td.setAttribute("class","loopring")} 
              else if (nome_cripto === "enjin-coin"){icone_td.setAttribute("class","enjin-coin")} 
              else if (nome_cripto === "skale-network"){icone_td.setAttribute("class","skale-network")} 
              else if (nome_cripto === "iotex"){icone_td.setAttribute("class","iotex")} 
              else if (nome_cripto === "celo"){icone_td.setAttribute("class","celo")}
              else if (nome_cripto === "wootrade"){icone_td.setAttribute("class","wootrade")} 
          }     
      });
}
atualizarTabela();
setInterval(atualizarTabela, 60000);// Atualiza de 1 em 1 minuto
    
 



