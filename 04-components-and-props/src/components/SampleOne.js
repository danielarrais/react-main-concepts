import { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return (
            <h1>This is a simple class component</h1>
        )
    }
}

function FunctionComponent() {
    return (
        <h1>This is a simple function component</h1>
    );
}

function SampleOne() {
    return (
        <div>
            <h1>Function and class component</h1>
            <hr />
            <ClassComponent />
            <FunctionComponent />
            <hr />
        </div>
    );
}

export default SampleOne;