import "./App.css";
import Timer from "./Timer.js";
import CircleBorder from "./CircleBorder.js";
import { useState, useRef } from "react";

const App = () => {
  const dateOnLoad = new Date();
  const timerValue = useRef(null);
  const [timerIsSet, updateTimerIsSet] = useState(false);
  const [countTo, updateCountTo] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCountTo(timerValue.current.value);
    updateTimerIsSet(true);
  };

  return (
    <div className="App">
      <CircleBorder />
      {timerIsSet ? (
        <button className="stopButton" onClick={() => updateTimerIsSet(false)}>
          Stop
        </button>
      ) : (
        <form className="setTimerForm" onSubmit={handleSubmit}>
          <label>
            <input
              className="secondsInput"
              type="number"
              ref={timerValue}
              min="0"
              max="60"
            />
          </label>
          <input type="submit" value="Start" />
        </form>
      )}
      {timerIsSet ? <Timer dateOnLoad={dateOnLoad} countTo={countTo} /> : null}
    </div>
  );
};

export default App;
