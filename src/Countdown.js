import { useState, useEffect } from "react";
import { Synth, Loop, Transport } from "tone";

const Stopwatch = (props) => {
  const [timeElapsed, updateTimeElapsed] = useState(props.countTo);

  //   useEffect(() => {
  //     const synth = new Synth().toDestination();
  //     // return () => synth.dispose;
  //   }, []);

  const startTime = (timerLength) => {
    const synth = new Synth().toDestination();
    const loop = new Loop((time) => {
      synth.triggerAttackRelease("C4", "8n");
    }, "8n").start(0);

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
          Transport.start();
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
