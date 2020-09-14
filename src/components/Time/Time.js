import React, {Component, Fragment} from 'react';

export default class Time extends Component {
    constructor(props) {
        super(props);
        this.state = this.getTime();
    }

    getTime() {
        const currentTime = new Date();
        return {
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
        }
    }

render() {
    const {hours, minutes, seconds, ampm} = this.state;

        return (
            <div className="time">
            {hours === 0 ? 12 : (hours > 12) ? hours - 12 : hours }:
            {minutes > 9 ? minutes : `0${minutes}` }:
            {seconds > 9 ? seconds : `0${seconds}` } {ampm}
            </div>
        )
    }
}
