import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import CoinInfo from "./Components/coinInfo";

const API_KEY = import.meta.env.MAIN_API_KEY;
const MAIN_API_KEY =
  "2152bf1c7b81f76dd28fa69c8afa6e6cf8079551b40d32f09aa33162e7494634";

function App() {
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist?&api_key" +
          MAIN_API_KEY
      );
      const json = await response.json();
      setList(json);
    };
    fetchAllCoinData().catch(console.error);
    console.log("can u print this: ", list);
  }, []);

  return (
    <div className="whole-page">
      <h1>My Crypto List</h1>

      <ul>
        {" "}
        {list &&
          Object.entries(list.Data).map(([coin]) =>
            list.Data[coin].PlatformType === "blockchain" ? (
              <CoinInfo
                image={list.Data[coin].ImageUrl}
                name={list.Data[coin].FullName}
                symbol={list.Data[coin].Symbol}
              />
            ) : null
          )}
      </ul>
    </div>
  );
}

export default App;
