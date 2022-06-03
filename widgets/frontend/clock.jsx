import React from 'react';
// import Tabs from './tabs';

class Clock extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }

        this.tick = this.tick.bind(this);
    }


    tick() {
        const time = new Date();
        this.setState({time});
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render (){
        const {time} = this.state;
        //debugger
        return (
            <div class="clock-container">
                <h1>CLOCK</h1>
                <h2>Time: {time.getHours()}:{time.getMinutes()}:{time.getSeconds()} EST</h2>
                <br />
                <h2>Date: {time.getMonth()} {time.getDate()} {time.getFullYear()} </h2>
                <br />
                <h2></h2>
            </div>
        )
    }
}

export default Clock;