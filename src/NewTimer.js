import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), timeElapsed: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
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
        <h2>
          Originally, it was {this.props.dateOnLoad.toLocaleTimeString()}.
        </h2>
        <h2>Now it's {this.state.date.toLocaleTimeString()}.</h2>
        <h2>It's been {this.state.timeElapsed} seconds</h2>
        <h2>Countdown: {100 - this.state.timeElapsed}</h2>
      </div>
    );
  }
}

export default Clock;
