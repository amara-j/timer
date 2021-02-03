import "./App.css";
import Countdown from "./Countdown.js";
import Timer from "./NewTimer.js";
import { useState, useEffect } from "react";

const App = () => {
  const dateOnLoad = new Date();

  const [countTo, setCountTo] = useState("");
  const [timerVal, setTimerVal] = useState(0);
  const [currentSecond, updateCurrentSecond] = useState(countTo);

  const startTime = (timerLength) => {
    let origin = Date.now();
    let targetTime = origin + timerLength;
    var counter = timerLength;
    const timeCounter = () => {
      let timeStart = Date.now();
      setTimeout(() => {
        console.log("count to:", countTo);
        console.log("target time", targetTime);
        console.log("now:", Date.now());
        console.log(counter);
        if (targetTime - Date.now() > 0 && counter > 0) {
          let fix = Date.now() - timeStart - 1000;
          timeCounter(1000 - fix);
          updateCurrentSecond(counter);
          counter--;
        } else {
          // execute this event when timer ends
          updateCurrentSecond("Timer done!");
          //Transport.start();
        }
      }, 1000);
    };
    return <div>{timeCounter()}</div>;
  };

  // useEffect(() => {
  //   startTime(timerVal);
  // }, [countTo]);

  return (
    <div className="App">
      {/* <Countdown countTo={countTo} /> */}
      <Timer dateOnLoad={dateOnLoad} />
      <button
        onClick={() => {
          startTime(countTo);
        }}
      >
        Top level Start
      </button>
      <text textAnchor="middle" x="50%" y="50%">
        {currentSecond}
      </text>
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
            onClick={() => {
              // setCountTo(timerVal);
              setCountTo(timerVal, function () {
                startTime(countTo);
              });
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default App;
