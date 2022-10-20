import React, { useState, useEffect } from "react";
import Convertation from "./Convertation";

function Header() {
  const [date, setDate] = useState("");
  const [currencyRate, setCurrencyRate] = useState("");
  let currency = ["USD", "EUR", "CAD", "UAH"];

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?symbols=&base=UAH")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setDate(data.date);
        let result = {};
        for (let i = 0; i < currency.length; i++) {
          result[currency[i]] = data.rates[currency[i]];
        }
        setCurrencyRate(result);
        console.log();
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <header className="p-3 text-bg-dark">
        <div align="center" className="container">
          <h3>Курс валют на {date}</h3>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-space-between">
            <div className="Header">
              <div className="p-3 text-bg-dark">
                {Object.keys(currencyRate).map((keyName, i) => (
                  <div className="container">
                    <div
                      className="flex-container block flex-item"
                      key={keyName}
                    >
                      <div className="currency-name">{keyName}</div>
                      <div className="currency-value">
                        {(1 / currencyRate[keyName]).toFixed(2) + "*" + " UAH"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      <Convertation currencyRate={currencyRate} />
    </div>
  );
}

export default Header;
