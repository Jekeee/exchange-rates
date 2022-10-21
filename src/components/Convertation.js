import React, { useState } from "react";
import { convertExchange } from '../api'

function Convertation({ currencyRate }) {
  const [firstInputValue, setFirstInputValue] = useState('');
  const [firstCurrency, setFirstCurrency] = useState('USD')
  const [secondInputValue, setSecondInputValue] = useState('');
  const [secondCurrency, setSecondCurrency] = useState('USD')

  const handleFirstInputChange = (e) => {
    const { value } = e.target
    setFirstInputValue(value);

    convertExchange(firstCurrency, secondCurrency, value)
      .then((data) => {
        const result = data.result;
        setSecondInputValue(result.toFixed(2));
      })
      .catch((error) => console.log("error", error));
  };

  const handleFirstSelectChange = (e) => {
    const { value } = e.target
    setFirstCurrency(value);

    convertExchange(value, secondCurrency, firstInputValue)
      .then((data) => {
        const result = data.result;
        setSecondInputValue(result.toFixed(2));
      })
      .catch((error) => console.log("error", error));
  }

  const handleSecondInputValue = (e) => {
    const { value } = e.target
    setSecondInputValue(value);

    convertExchange(secondCurrency, firstCurrency, value)
      .then((data) => {
        const result = data.result;
        setFirstInputValue(result.toFixed(2));
      })
      .catch((error) => console.log("error", error));
  };

  const handleSecondSelectChange = (e) => {
    const { value } = e.target
    setSecondCurrency(value)

    convertExchange(firstCurrency, value, firstInputValue)
      .then((data) => {
        const result = data.result;
        setSecondInputValue(result.toFixed(2));
      })
      .catch((error) => console.log("error", error));
  }

  const renderSelectOptions = () => {
    return Object.keys(currencyRate).map(keyName => (
      <option key={keyName}>{keyName}</option>
    ))
  }

  return (
    <div className="Convertation">
      <div className="container">
        <form>
          <input
            type="number"
            name="input-first-currency"
            placeholder="Введите первую валюту"
            value={firstInputValue}
            onChange={handleFirstInputChange}
          />
          <select
            name="select-first-currency"
            onChange={handleFirstSelectChange}
          >
            {renderSelectOptions()}
          </select>
        </form>

        <form>
          <input
            type="number"
            name="input-second-currency"
            placeholder="Введите вторую валюту"
            value={secondInputValue}
            onChange={handleSecondInputValue}
          />
          <select
            name="select-second-currency"
            onChange={handleSecondSelectChange}
          >
            {renderSelectOptions()}
          </select>
        </form>
      </div>
    </div>
  );
}

export default Convertation;
