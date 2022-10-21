import React from "react";
import { convertCurrencyToUAH } from "../helpers/convertCurrencyToUAH";

function Header({ date, currencyRate }) {
  console.log(currencyRate);
  return (
      <header className="Header">
        <div align="center" className="container">
          <h3>Курс валют на {date}</h3>
          
          <div className=" div-currency-value">
              {Object.keys(currencyRate).filter(function(name) {
                  return name !== 'UAH';
                  }).map((currency) => (
                <div className="item-currency" key={currency}>
                    <div className="currency-name">{currency}</div>
                    <div className="currency-value">{convertCurrencyToUAH(currencyRate[currency])}* UAH</div>
                </div>
              ))}  
            </div>
        </div>
      </header>
  );
}

export default Header;
