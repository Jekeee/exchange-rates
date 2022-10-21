import React from "react";
import { convertCurrencyToUAH } from "../helpers/convertCurrencyToUAH";

function Header({ date, currencyRate }) {
  return (
    <div className="App">
      <header className="p-3 text-bg-dark">
        <div align="center" className="container">
          <h3>Курс валют на {date}</h3>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-space-between">
            <div className="Header">
              <div className="p-3 text-bg-dark">
                {Object.keys(currencyRate).map((currency) => (
                  <div className="container" key={currency}>
                    <div className="flex-container block flex-item">
                      <div className="currency-name">{currency}</div>
                      <div className="currency-value">{convertCurrencyToUAH(currencyRate[currency])}* UAH
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
