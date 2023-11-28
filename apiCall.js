let requestOptions = {
  method: "GET",
  redirect: "follow",
};

const apiCall = fetch("api.coincap.io/v2/assets/bitcoin", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

console.log(apiCall);
