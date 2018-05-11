import React, { Component } from 'react';
import './App.css';

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time
        };
    }
    componentDidMount() {
        console.log('aaa')
        this.countdownID = setInterval(() => this.decrease(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.countdownID)
    }
    decrease() {
        this.setState(prevState => ({
            time: prevState.time - 1
        }))
    }
    render() {
        return (
            <div>{ this.state.time }</div>
        );
    }
}

export default Countdown;
