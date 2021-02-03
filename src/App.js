import "./App.css";
import Countdown from "./Countdown.js";
import { useState } from "react";

const App = () => {
  const [countTo, setCountTo] = useState("");
  const [timerVal, setTimerVal] = useState(0);

  return (
    <div className="App">
      <Countdown countTo={countTo} />
      <div>
        <label>
          Time (seconds)
          <input
            type="number"
            onChange={(e) => {
              setTimerVal(e.target.value);
            }}
          ></input>
          <input
            type="submit"
            value="Go"
            onClick={() => setCountTo(timerVal)}
          />
        </label>
      </div>
    </div>
  );
};

export default App;
