import { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return (
            <h1>This is a class component with properties contructed for {this.props.author}</h1>
        )
    }
}

function FunctionComponent(props) {
    return (
        <h1>This is a function component with properties contructed for {props.author}</h1>
    );
}

function SampleTwo() {
    return (
        <div>
            <h1>Function and class components with properties</h1>
            <hr />
            <ClassComponent author="Daniel Arrais"/>
            <FunctionComponent author="João e Silva"/>
            <hr />
        </div>
    );
}

export default SampleTwo;