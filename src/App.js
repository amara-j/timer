import "./App.css";
import Timer from "./Timer.js";
import CircleBorder from "./CircleBorder.js";
import { useState, useRef } from "react";

const App = () => {
  const dateOnLoad = new Date();
  const inputSeconds = useRef(null);
  const inputMinutes = useRef(null);
  const inputHours = useRef(null);
  const [timerIsSet, updateTimerIsSet] = useState(false);
  const [countTo, updateCountTo] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalInput =
      Number(inputSeconds.current.value) +
      60 * Number(inputMinutes.current.value) +
      3600 * Number(inputHours.current.value);
    updateCountTo(totalInput);
    updateTimerIsSet(true);
  };

  return (
    <div className="App">
      {timerIsSet ? (
        <Timer dateOnLoad={dateOnLoad} countTo={countTo} />
      ) : (
        <div className="circle-container">
          <CircleBorder />
        </div>
      )}
      {timerIsSet ? (
        <button className="stopButton" onClick={() => updateTimerIsSet(false)}>
          Stop
        </button>
      ) : null}
      <div className="control-panel">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="timerInput"
              type="number"
              ref={inputHours}
              min="0"
              max="60"
              defaultValue="0"
            />
            h
          </label>
          <label>
            <input
              className="timerInput"
              type="number"
              ref={inputMinutes}
              min="0"
              max="60"
              defaultValue="0"
            />
            m
          </label>
          <label>
            <input
              className="timerInput"
              type="number"
              ref={inputSeconds}
              min="0"
              max="60"
              defaultValue="0"
            />{" "}
            s
          </label>
          <input type="submit" value="Start" />
        </form>
      </div>
    </div>
  );
};

export default App;
