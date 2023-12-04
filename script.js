const urlAPI = `https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;
const apiKey = `7b50a871-98b0-450a-b19b-d8941f11bc0c`;

const getCriptoValues = async () => {
  try {
    const response = await fetch(urlAPI, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao obter os dados das criptomoedas');
    }

    const { data } = await response.json();
    const criptos = data || []; 

    return { criptos, trading: [] }; 
  } catch (error) {
    console.error(error);
    return { criptos: [], trading: [] }; 
  }
};

const convertCriptoToCoin = (cripto, coin) => {
  
  return;
};


getCriptoValues().then(({ criptos, trading }) => {
  console.log('Criptomoedas:', criptos);
  console.log('Trading:', trading);
});