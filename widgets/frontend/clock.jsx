import React, { Component } from 'react';

class Clock extends Component {
  state = {
    time: new Date(),
  };

  tick = () => {
    const time = new Date();
    this.setState({ time });
  };

  componentDidMount = () => {
    this.interval = setInterval(this.tick, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render = () => {
    const { time } = this.state;
    const formatTime = (time) => {
      return String(time).padStart(2, '0');
    };
    return (
      <div className="clock">
        <div className="data-type">
          <h2>Time:</h2>
          <br />
          <h2>Date:</h2>
        </div>
        <div className="data">
          <h2>
            {formatTime(time.getHours())}:{formatTime(time.getMinutes())}:
            {formatTime(time.getSeconds())} EST
          </h2>
          <br />
          <h2>
            {time.getMonth()} / {time.getDate()} / {time.getFullYear()}{' '}
          </h2>
        </div>
      </div>
    );
  };
}

export default Clock;
