import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Convertation from "./components/Convertation";
import { getLatestExchange } from "./api";
import { currencies } from './consts/currencies'

function App() {
  const [date, setDate] = useState("");
  const [currencyRate, setCurrencyRate] = useState("");

  useEffect(() => {
    getLatestExchange()
      .then((data) => {
        setDate(data.date);
        let result = {};
        for (let i = 0; i < currencies.length; i++) {
          result[currencies[i]] = data.rates[currencies[i]];
        }
        setCurrencyRate(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <Header date={date} currencyRate={currencyRate} />
      <Convertation currencyRate={currencyRate} />
    </div>
  );
}

export default App;
