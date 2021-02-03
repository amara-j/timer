import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      countdown: this.props.countTo,
    };
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
      countdown: this.state.countdown - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Count down from {this.props.countTo}</h1>
        <h2>Countdown: {this.state.countdown}</h2>
      </div>
    );
  }
}

export default Timer;
