
import { Component } from 'react';

class SampleOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOn: false
        }

        this.eventClickWithBind = this.eventClickWithBind.bind(this);
    }

    eventClickWithProperty = () => {
        alert('Event called with property function');
    }

    eventClickWithBind() {
        alert('Event called with binded function');
    }

    eventClickWithArrowFunction() {
        alert('Event called with Arrow function');
    }

    anyEvent(event) {
        alert(event.type );
    }

    render() {
        return (
            <div>
                <button onClick={this.eventClickWithProperty}>
                    Property function
                </button>
                <button onClick={() => this.eventClickWithArrowFunction()}>
                    Arrow function
                </button>
                <button onClick={this.eventClickWithBind}>
                    Binded function
                </button>
                <button onClick={this.eventClickWithBind}>
                    Binded function
                </button>
                <button onClick={(e) => this.anyEvent(e)}>
                    Get event with arrow function
                </button>
                <button onClick={this.anyEvent.bind(this)}>
                    Get event with binded function
                </button>
            </div>
        );
    }
}

export default SampleOne;