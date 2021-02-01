import "./App.css";
import Stopwatch from "./Countdown.js";
import { useState } from "react";

const App = () => {
  const [countTo, setCountTo] = useState("");

  return (
    <div className="App">
      Timer!
      <div>
        <label>
          Time (seconds)
          <input
            type="number"
            onChange={(e) => {
              setCountTo(e.target.value);
            }}
          ></input>
        </label>
      </div>
      <Stopwatch countTo={countTo} />
    </div>
  );
};

export default App;
