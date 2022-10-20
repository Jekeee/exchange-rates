import React, { useState } from "react";

function Convertation(currencyRate) {
    const [inputFirst, setInputFirst] = useState("");
    const [inputSecond, setInputSecond] = useState("");

    let convertFirstCurrency = (e) => {
        e.preventDefault();
        let inputFirstCurrency = document.getElementsByName("iput-first-currency")[0].value;
        let selectFirstConvert = document.getElementsByName("select-first-currency")[0].value;
        let selectSecondConvert = document.getElementsByName("select-second-currency")[0].value;

        setInputFirst(inputFirstCurrency);
        let getUrlConvert ="https://api.exchangerate.host/convert?from=" + selectFirstConvert + "&to=" + selectSecondConvert + "&amount=" + inputFirstCurrency;
        fetch(getUrlConvert)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                let result = data.result;
                setInputSecond(result.toFixed(2));
            })
            .catch((error) => console.log("error", error));
    };

    let convertSecondCurrency = (e) => {
        e.preventDefault();
        let selectFirstConvert = document.getElementsByName("select-first-currency")[0].value;
        let inputSecondCurrency = document.getElementsByName("iput-second-currency")[0].value;
        let selectSecondConvert = document.getElementsByName("select-second-currency")[0].value;
        setInputSecond(inputSecondCurrency);
        let getUrlConvert ="https://api.exchangerate.host/convert?from=" + selectSecondConvert + "&to=" + selectFirstConvert + "&amount=" + inputSecondCurrency;
        fetch(getUrlConvert)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                let result = data.result;
                setInputFirst(result.toFixed(2));
            })
            .catch((error) => console.log("error", error));
    };

    return (
        <div className="Convertatyon">
            <div className="container">
                <form>
                    <input
                        type="number"
                        name="iput-first-currency"
                        value={inputFirst}
                        onChange={convertFirstCurrency}
                    />
                    <select
                        name="select-first-currency"
                        id=""
                        onChange={convertFirstCurrency}
                    >
                        {Object.keys(currencyRate.currencyRate).map((keyName, i) => (
                            <option>{keyName}</option>
                        ))}
                    </select>
                </form>

                <form>
                    <input
                        type="number"
                        name="iput-second-currency"
                        value={inputSecond}
                        onChange={convertSecondCurrency}
                    />
                    <select
                        name="select-second-currency"
                        id=""
                        onChange={convertFirstCurrency}
                    >
                        {Object.keys(currencyRate.currencyRate).map((keyName, i) => (
                            <option>{keyName}</option>
                        ))}
                    </select>
                </form>
            </div>
        </div>
    );
}

export default Convertation;
