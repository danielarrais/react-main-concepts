import { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return (
            <h1>This is a class Component</h1>
        )
    }
}

function FunctionComponent() {
    return (
        <h1>This is a function Component</h1>
    );
}

function SampleOne() {
    return (
        <div>
            <h1>Function and Class Components</h1>
            <hr />
            <ClassComponent />
            <FunctionComponent />
            <hr />
        </div>
    );
}

export default SampleOne;