const urlAPI = `https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;
const apiKey = `7b50a871-98b0-450a-b19b-d8941f11bc0c`;

// funcao para pegar os valores das cripto moedas

const getCriptoValues = async () => {
  const criptos = [];
  const trading = [];
};

const convertCriptoToCoin = (cripto, coin) => {
  // logica para converter o valor da cripto para moeda desejada
  return;
};


getCriptoValues().then(({ criptos, trading }) => {
  console.log('Criptomoedas:', criptos);
  console.log('Trading:', trading);
});