import React, { useEffect, useState } from "react";
// const API_KEY = import.meta.env.VITE_APP_API_KEY;
const MAIN_API_KEY =
  "2152bf1c7b81f76dd28fa69c8afa6e6cf8079551b40d32f09aa33162e7494634";

const CoinInfo = ({ image, name, symbol }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const getCoinPrice = async (symbol) => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD,JPY,EUR?&api_key` +
          MAIN_API_KEY
      );
      const json = await response.json();
      setPrice(json);
    };
    getCoinPrice(symbol).catch(console.error);
  }, [symbol]);

  return (
    <div>
      {price ? (
        <li className="main-list" key={symbol}>
          {/* <img
            className="icons"
            src={`https://www.cryptocompare.com${image}`}
            alt={`Small icon for ${name} crypto coin`}
            height="500px"
          /> */}
          {name} <span className="tab"></span> ${price.USD} USD
        </li>
      ) : null}
    </div>
  );
};

export default CoinInfo;
