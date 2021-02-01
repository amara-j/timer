import "./App.css";
import Stopwatch from "./Countdown.js";
import { useState } from "react";

const App = () => {
  const [countTo, setCountTo] = useState(0);

  return (
    <div className="App">
      Timer!
      <div>
        <label>
          Time (seconds)
          <input
            type="number"
            value={countTo}
            onChange={(e) => setCountTo(e.target.value)}
          ></input>
        </label>
      </div>
      <Stopwatch />
    </div>
  );
};

export default App;
