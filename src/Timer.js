import React from "react";
import { Synth, Loop, Transport } from "tone";
import CircleAnimation from "./CircleAnimation.js";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      countdown: this.props.countTo,
      stopped: false,
      percentage: 0,
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
        this.setState({ countdown: "Timer done!" });
        Transport.start();
      }
    }, 1000);
  }

  componentWillUnmount() {
    Transport.stop();
    clearInterval(this.timerInterval);
  }

  tick() {
    if (this.state.stopped === false) {
      this.setState({
        date: new Date(),
        percentage:
          (this.props.countTo - this.state.countdown) / this.props.countTo,
        countdown: this.state.countdown - 1,
      });
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.countdown}</h2>
        <CircleAnimation percentDone={this.state.percentage} />
      </div>
    );
  }
}

export default Timer;
