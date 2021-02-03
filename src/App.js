import "./App.css";
import Timer from "./NewTimer.js";
import { useState, useRef } from "react";

const App = () => {
  const dateOnLoad = new Date();
  const timerValue = useRef(null);

  const [timerIsSet, updateTimerIsSet] = useState(false);
  // const [timerValue, setTimerValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(timerValue.current.value);
    updateTimerIsSet(true);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="number" name="name" ref={timerValue} />
        </label>
        <input type="submit" value="Start" />
      </form>
      {timerIsSet ? <Timer dateOnLoad={dateOnLoad} /> : null}
    </div>
  );
};

export default App;
