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
                <h1>Element Variables and Inline If-Else with Conditional Operator</h1> <hr />
                <button onClick={() => this.toggleLogging()}>{this.state.isLogged ? 'Exit' : 'Login'}</button><br />
                {textInfo}
            </div>
        );
    }
}
class ConditionalInlineIfInJSX extends Component {
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
        let textInfo = <span>User logged: {this.state.isLogged && 'Daniel Arrais'}</span>;

        return (
            <div>
                <h1>Inline If-Else with Conditional Operator</h1> <hr />
                <button onClick={() => this.toggleLogging()}>{this.state.isLogged ? 'Exit' : 'Login'}</button><br />
                {textInfo}
            </div>
        );
    }

}

function NotRenderContent(props) {
    if (!props.render) return null;

    return (
        <div>
            <h1>Simple component</h1>
        </div>
    );
}
class NotRenderContentOfElement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            renderChildren: false,
        }
    }

    toggleLogging() {
        this.setState(prevState => ({ renderChildren: !prevState.renderChildren }))
    }

    render() {
        return (
            <div>
                <h1>Preventing Component from Rendering</h1> <hr />
                <button onClick={() => this.toggleLogging()}>{this.state.renderChildren ? 'Hide' : 'Show'}</button><br />
                <NotRenderContent render={this.state.renderChildren} />
            </div>
        );
    }

}

class SampleOne extends Component {
    render() {
        return (
            <div>
                <ConditionalElementVariable />
                <ConditionalInlineIfInJSX />
                <NotRenderContentOfElement />
            </div>
        );
    }
}

export default SampleOne;