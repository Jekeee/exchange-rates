export const getLatestExchange = () => {
    return fetch("https://api.exchangerate.host/latest?symbols=&base=UAH")
      .then((data) => data.json());
  }
  
  export const convertExchange = (currencyFrom, currencyTo, amount) => {
    const convertUrl = `https://api.exchangerate.host/convert?from=${currencyFrom}&to=${currencyTo}&amount=${amount}`
    return fetch(convertUrl).then((data) => data.json());
  }
  