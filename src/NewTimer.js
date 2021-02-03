import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), timeElapsed: 0 };
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  tick() {
    this.setState({
      date: new Date(),
      timeElapsed: this.state.timeElapsed + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Count down from 100</h1>
        <h2>It's been {this.state.timeElapsed} seconds</h2>
        <h2>Countdown: {100 - this.state.timeElapsed}</h2>
      </div>
    );
  }
}

export default Timer;
