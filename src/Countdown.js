import { useState, useEffect } from "react";
import { Synth, Loop, Transport } from "tone";
import "./App.css";

const Countdown = (props) => {
  const [timeElapsed, updateTimeElapsed] = useState(props.countTo);

  useEffect(() => {
    const synth = new Synth().toDestination();
    const loop = new Loop((time) => {
      synth.triggerAttackRelease("C4", "8n");
    }, "8n").start(0);
    return () => synth.dispose;
  }, []);

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
          Transport.start();
        }
      }, 1000);
    };
    return <div>{timeCounter()}</div>;
  };

  const stopSound = () => {
    Transport.stop();
  };

  return (
    <div>
      <svg height="650" width="650">
        <circle
          cx="50%"
          cy="50%"
          r="300"
          fill="none"
          stroke="#F0CE01"
          strokeWidth="4"
        />
        <text textAnchor="middle" x="50%" y="50%">
          Circle Text
        </text>
      </svg>
      <button
        onClick={() => {
          startTime(props.countTo);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          stopSound();
        }}
      >
        Stop
      </button>
      <div>{timeElapsed}</div>
    </div>
  );
};

export default Countdown;
