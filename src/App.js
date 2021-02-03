import "./App.css";
import Timer from "./Timer.js";
import TimerContainer from "./TimerContainer.js";
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
      {/* <TimerContainer /> */}
      <form onSubmit={handleSubmit}>
        <label>
          <input type="number" ref={timerValue} />
        </label>
        <input type="submit" value="Start" />
      </form>
      {timerIsSet ? <Timer dateOnLoad={dateOnLoad} countTo={countTo} /> : null}
    </div>
  );
};

export default App;
