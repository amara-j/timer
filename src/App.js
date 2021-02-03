import "./App.css";
import Timer from "./NewTimer.js";
import { useState, useEffect } from "react";

const App = () => {
  const dateOnLoad = new Date();
  const [timerIsSet, updateTimerIsSet] = useState(false);

  return (
    <div className="App">
      <button onClick={() => updateTimerIsSet(true)}>Show Timer</button>
      {timerIsSet ? <Timer dateOnLoad={dateOnLoad} /> : null}
    </div>
  );
};

export default App;
