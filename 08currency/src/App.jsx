/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import { InputBox } from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertAmount, setConvertAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  useEffect(() => {
    setConvertAmount(amount * currencyInfo[to]);
  }, [amount, from, to, currencyInfo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertAmount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-200 rounded-lg p-5 backdrop-blur-sm bg-white/40 shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-5 text-black">Currency Converter</h1>
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="relative w-full h-10 flex items-center justify-center mb-4">
            <button
              type="button"
              className="border-2 border-white rounded-full bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition duration-300"
              onClick={swap}
            >
              SWAP
            </button>
          </div>
          <div className="w-full mb-6">
            <InputBox
              label="To"
              amount={convertAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
