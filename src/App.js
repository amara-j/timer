import "./App.css";
import Countdown from "./Countdown.js";
import { useState } from "react";

const App = () => {
  const [countTo, setCountTo] = useState("");

  return (
    <div className="App">
      <Countdown countTo={countTo} />
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
    </div>
  );
};

export default App;
