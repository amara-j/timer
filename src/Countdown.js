import { useState, useEffect } from "react";
import { Synth, Loop, Transport } from "tone";
import "./App.css";

const Countdown = (props) => {
  const countTo = props.countTo;
  const [currentSecond, updateCurrentSecond] = useState(props.countTo);
  const radius = 300;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 4;
  const circleContainerSize = 2 * radius + 4 * strokeWidth;

  useEffect(() => {
    const synth = new Synth().toDestination();
    new Loop((time) => {
      synth.triggerAttackRelease("C7", "8n");
    }, "2n").start(0);
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

  return (
    <div>
      <svg
        className="progress-ring"
        height={circleContainerSize}
        width={circleContainerSize}
      >
        <circle
          className="progress-ring__circle"
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke="black"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference * (1 - currentSecond / countTo)}
        />
        <text textAnchor="middle" x="50%" y="50%">
          {currentSecond}
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
          Transport.stop();
        }}
      >
        Stop
      </button>
    </div>
  );
};

export default Countdown;
