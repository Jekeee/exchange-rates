import React from "react";
import { convertCurrencyToUAH } from "../helpers/convertCurrencyToUAH";

function Header({ date, currencyRate }) {
  
  return (
      <header className="Header">
        <div className="header-content container">
          <h3>Курс валют на {date}</h3>
          
          <div className="currency-value-container">
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
