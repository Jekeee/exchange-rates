import React, { useState } from "react";
import { convertExchange } from "../api";

let timeout = null;

function Convertation({ currencyRate }) {
  const [firstInputValue, setFirstInputValue] = useState("0");
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondInputValue, setSecondInputValue] = useState("0");
  const [secondCurrency, setSecondCurrency] = useState("USD");

  const handleFirstInputChange = (e) => {
    clearTimeout(timeout);
    const { value } = e.target;
    setFirstInputValue(value);
    timeout = setTimeout(
      () => {
        convertExchange(firstCurrency, secondCurrency, value)
          .then((data) => {
            const result = data.result;
            setSecondInputValue(result.toFixed(2));
          })
          .catch((error) => console.log("error", error));
      },500);
  };

  const handleFirstSelectChange = (e) => {
    const { value } = e.target;
    setFirstCurrency(value);
    convertExchange(value, secondCurrency, firstInputValue)
      .then((data) => {
        const result = data.result;
        setSecondInputValue(result.toFixed(2));
      })
      .catch((error) => console.log("error", error));
  };

  const handleSecondInputValue = (e) => {
    clearTimeout(timeout);
    const { value } = e.target;
    setSecondInputValue(value);
    timeout = setTimeout(() => {
      convertExchange(secondCurrency, firstCurrency, value)
        .then((data) => {
          const result = data.result;
          setFirstInputValue(result.toFixed(2));
        })
        .catch((error) => console.log("error", error));
    }, 500);
  };

  const handleSecondSelectChange = (e) => {
    const { value } = e.target;
    setSecondCurrency(value);
    convertExchange(firstCurrency, value, firstInputValue)
      .then((data) => {
        const result = data.result;
        setSecondInputValue(result.toFixed(2));
      })
      .catch((error) => console.log("error", error));
  };

  const renderSelectOptions = () => {
    return Object.keys(currencyRate).map((keyName) => (
      <option key={keyName}>{keyName}</option>
    ));
  };

  return (
    <div className="Convertation container">
      <h2>
        <u>Конвертер валют</u>
      </h2>
      <span>Источник: по среднему банковскому курсу</span>
      <div className="container input-convert">
        <div className="input-block">
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
        </div>
        <div className="input-block">
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
        </div>
      </div>
    </div>
  );
}

export default Convertation;
