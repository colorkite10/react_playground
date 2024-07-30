import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState(0);
  const [getCoin, setGetCoin] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);

  const writeMoney = (e) => setMyMoney(e.target.value);
  const selectCoin = (e) => setGetCoin(e.target.value);

  return (
    <div>
      <h1>the coins {loading ? "" : `(${coins.length})`}</h1>
      <div>
        <input
          type="number"
          value={myMoney}
          onChange={writeMoney}
          placeholder="WRITE UR USD"
        ></input>
      </div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <select onChange={selectCoin}>
          <option key="-1">select coin</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price.toFixed(2)}{" "}
              USD
            </option>
          ))}
        </select>
      )}
      <div>
        <h2>
          Coins you can buy:{" "}
          {getCoin > 0 ? (myMoney / getCoin).toFixed(2) : null}
        </h2>
      </div>
    </div>
  );
}

export default App;
