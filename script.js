// const urlAPI = `https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;
// const apiKey = `7b50a871-98b0-450a-b19b-d8941f11bc0c`;

async function getBitcoinPriceAndExchangeRate(apiKey) {
  const apiUrl = "https://rest.coinapi.io/v1/exchangerate/BTC";
  const headers = {
    "X-CoinAPI-Key": apiKey,
  };

  try {
    // Fetch Bitcoin price in USD
    const priceResponse = await fetch(`${apiUrl}/USD`, { headers });
    const priceData = await priceResponse.json();
    const bitcoinPriceUSD = priceData.rate;

    // Fetch Bitcoin exchange rates against other currencies
    const exchangeRateResponse = await fetch(apiUrl, { headers });
    const exchangeRateData = await exchangeRateResponse.json();
    const exchangeRates = exchangeRateData.rates;

    return {
      bitcoinPriceUSD,
      exchangeRates,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Example usage:
const apiKey = "8C8FFECD-9008-43A8-A0ED-AF6F85DE8AED"; // Replace with your actual API key
getBitcoinPriceAndExchangeRate(apiKey)
  .then((data) => {
    console.log("Bitcoin Price (USD):", data.bitcoinPriceUSD);
    console.log("Exchange Rates:", data.exchangeRates);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
