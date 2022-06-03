import React from 'react';

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
            <div>
                <h1>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h1>
            </div>
        )
    }
}

export default Clock;