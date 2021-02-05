import React from "react";
import CircleAnimation from "./CircleAnimation.js";
import CircleBorder from "./CircleBorder.js";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      countdown: this.props.countTo,
      stopped: false,
      percentage: 0,
      timerIsSet: this.props.timerIsSet,
    };
  }

  audio = new Audio("/beep.mp3");

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      if (this.state.countdown > 1) {
        this.tick();
      } else {
        clearInterval(this.timerInterval);
        this.setState({ countdown: "Timer done!", percentage: 1 });
        this.audio.loop = true;
        this.audio.play();
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
    this.audio.pause();
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

  formatSecsToHHMMSS(secs) {
    if (this.state.countdown > 0) {
      return new Date(secs * 1000).toISOString().substr(11, 8);
    } else {
      return "Timer done!";
    }
  }

  render() {
    return (
      <div className="circle-container">
        <CircleBorder
          countdownText={this.formatSecsToHHMMSS(this.state.countdown)}
        />
        <CircleAnimation percentDone={this.state.percentage} />
      </div>
    );
  }
}

export default Timer;
