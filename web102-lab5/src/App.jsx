import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
const API_KEY = import.meta.env.MAIN_API_KEY;
const MAIN_API_KEY =
  "ab8436e818f95b539f14019303dedcb76ec04cf7fd6b131ca4e516a2d4f45202";

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
              <li key={list.Data[coin].FullName}>{list.Data[coin].FullName}</li>
            ) : null
          )}
      </ul>
    </div>
  );
}

export default App;
