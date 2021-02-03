import React from "react";
import { Synth, Loop, Transport } from "tone";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      countdown: this.props.countTo,
    };
    const synth = new Synth().toDestination();
    new Loop((time) => {
      synth.triggerAttackRelease("C7", "8n");
    }, "2n").start(0);
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      if (this.state.countdown > 0) {
        this.tick();
      } else {
        clearInterval(this.timerInterval);
        console.log("DONE");
        Transport.start();
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  tick() {
    this.setState({
      date: new Date(),
      countdown: this.state.countdown - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.countdown}</h2>
      </div>
    );
  }
}

export default Timer;
