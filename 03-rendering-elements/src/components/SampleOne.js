import { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTime: null,
        }
    }

    componentDidMount() {
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        const currentTime = this.formatedCurrentTime();
        this.setState({
            currentTime: currentTime
        })
    }

    formatedCurrentTime() {
        return new Date().toLocaleTimeString("pt-BR", {
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
        });
    }

    render() {
        return (
            <div>
                <h1>Updating the Rendered Element</h1>
                <h1>Relógio: {this.state.currentTime}</h1>
            </div>
        );
    }
}

class SampleOne extends Component {
    render() {
        return <Clock />;
    }
}

export default SampleOne;