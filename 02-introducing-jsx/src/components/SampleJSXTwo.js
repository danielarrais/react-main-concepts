import { Component } from 'react';

class SampleJSXTwo extends Component {
    getTitle(name, age) {
        return <h1>{name} - {age}</h1>;
    }

    getDescription(job) {
        return <h2>{job}</h2>;
    }

    render() {
        const name = "Daniel Arrais de Carvalho";
        const job = "Software Engineer";
        const age = 23;

        return (
            <div>
                <h2>JSX is an Expression Too</h2>
                <hr />
                {this.getTitle(name, age)}
                {this.getDescription(job)}
                <hr />
            </div>
        );
    }
}

export default SampleJSXTwo;