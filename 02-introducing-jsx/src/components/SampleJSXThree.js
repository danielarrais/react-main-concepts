import React from 'react';
import { Component } from 'react';

class SampleJSXThree extends Component {
    getTitle(name, age) {
        return <h1>{name} - {age}</h1>;
    }

    getDescription(job) {
        return <h2>{job}</h2>;
    }

    render() {
        const elementJSX = (
            <h1>
                This element is constructed with JSX
            </h1>
        );

        const elementReact = React.createElement(
            'h1', {},
            'This element is constructed with React.createElement()'
        );

        return (
            <div>
                <h2>JSX Represents Objects</h2>
                <hr />
                {elementJSX}
                {elementReact}
                <hr />
            </div>
        );
    }
}

export default SampleJSXThree;