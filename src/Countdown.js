import { useState } from "react";

const Stopwatch = () => {
  const [timeElapsed, updateTimeElapsed] = useState(0);

  const calculateTime = () => {
    let startTime = Date.now();

    const timeCounter = (timer, max, repeatArgument, callbackArgument) => {
      var counter = 1;
      var init = (t) => {
        let timeStart = Date.now();
        setTimeout(function () {
          if (counter < max) {
            let fix = Date.now() - timeStart - timer;
            init(t - fix);
            counter++;
            // repeat this event max times
            repeatArgument();
          } else {
            // execute this event when timer ends
            callbackArgument();
          }
        }, t);
      };
      init(timer);
    };
    return timeCounter(
      1000,
      20,
      () => {
        updateTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
      },
      () => {
        updateTimeElapsed("Timer done!");
      }
    );
  };
  return (
    <div>
      <button onClick={() => calculateTime()}>Start</button>
      <div>{timeElapsed}</div>
    </div>
  );
};

export default Stopwatch;
