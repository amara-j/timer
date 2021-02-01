import { useState } from "react";

const Stopwatch = (props) => {
  const [timeElapsed, updateTimeElapsed] = useState(props.countTo);

  const startTime = (timerLength) => {
    let origin = Date.now();
    let targetTime = origin + timerLength;
    var counter = timerLength;
    const timeCounter = () => {
      let timeStart = Date.now();
      setTimeout(() => {
        if (targetTime - Date.now() > 0 && counter > 0) {
          let fix = Date.now() - timeStart - 1000;
          timeCounter(1000 - fix);
          updateTimeElapsed(counter);
          counter--;
        } else {
          // execute this event when timer ends
          updateTimeElapsed("Timer done!");
        }
      }, 1000);
    };
    return <div>{timeCounter()}</div>;
  };

  return (
    <div>
      <button
        onClick={() => {
          startTime(props.countTo);
        }}
      >
        Start
      </button>
      <div>{timeElapsed}</div>
    </div>
  );
};

export default Stopwatch;
