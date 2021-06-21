import { Component } from 'react';

class ConditionalElementVariable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogged: false,
        }
    }

    toggleLogging() {
        this.setState(prevState => ({ isLogged: !prevState.isLogged }))
    }

    render() {
        let textInfo = null;

        if (this.state.isLogged) {
            textInfo = <span>Daniel Arrais</span>
        } else {
            textInfo = <span>Not user logged</span>
        }

        return (
            <div>
                <h1>Element Variables and Inline If-Else with Conditional Operator</h1>
                <button onClick={() => this.toggleLogging()}>{this.state.isLogged ? 'Exit' : 'Login'}</button>
                {textInfo}
            </div>
        );
    }
}

class SampleOne extends Component {
    render() {
        return <ConditionalElementVariable />
    }
}

export default SampleOne;