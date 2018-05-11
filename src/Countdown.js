import React, { Component } from 'react';
import './App.css';

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time,
            started: false
        };
    }
    componentWillUnmount() {
        clearInterval(this.countdownID)
    }
    decrease() {
        if(this.state.time > 0) {
            this.setState(prevState => ({
                time: prevState.time - 1
            }))
        }
        else {
            clearInterval(this.countdownID);
        }
    }
    startTimer() {
        if (!this.state.started) {
            this.countdownID = setInterval(() => this.decrease(), 1000)
        }
    }
    handleClick() {
        this.startTimer();
        this.setState({
            started: true
        })
    }
    render() {
        return (
            <React.Fragment>
            <div>{ this.state.time }</div>
            <button onClick={() => this.handleClick()}>START</button>
            </React.Fragment>
        );
    }
}

export default Countdown;
