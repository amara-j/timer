import { useState } from "react";

const Stopwatch = () => {
  const [timeElapsed, updateTimeElapsed] = useState(0);
  const [isStopped, setIsStopped] = useState(false);

  const calculateTime = () => {
    let startTime = Date.now();
    var counter = 1;
    const timeCounter = (max) => {
      let timeStart = Date.now();
      setTimeout(() => {
        if (counter < max) {
          let fix = Date.now() - timeStart - 1000;
          timeCounter(1000 - fix);
          counter++;
          updateTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
        } else {
          // execute this event when timer ends
          updateTimeElapsed("Timer done!");
        }
      }, 1000);
    };

    return <div>{timeCounter(20)}</div>;
  };

  return (
    <div>
      <button
        onClick={() => {
          calculateTime();
        }}
      >
        Start
      </button>
      <button onClick={() => setIsStopped(true)}>Stop</button>
      <div>{timeElapsed}</div>
    </div>
  );
};

export default Stopwatch;
